import { MinPriorityQueue } from '@datastructures-js/priority-queue';

interface Point {
	x: number;
	y: number;
	h: number;
}

function trapRainWater(heightMap: number[][]): number {
	const n = heightMap.length;
	const m = heightMap[0].length;
	const pq = new MinPriorityQueue({ priority: (a: Point) => a.h });

	const visited = Array.from({ length: n }, () => Array(m).fill(false));
	const dirs = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];

	for (let i = 0; i < n; i++) {
		visited[i][0] = true;
		visited[i][m - 1] = true;
		pq.enqueue({ x: i, y: 0, h: heightMap[i][0] });
		pq.enqueue({ x: i, y: m - 1, h: heightMap[i][m - 1] });
	}

	for (let j = 1; j < m - 1; j++) {
		visited[0][j] = true;
		visited[n - 1][j] = true;
		pq.enqueue({ x: 0, y: j, h: heightMap[0][j] });
		pq.enqueue({ x: n - 1, y: j, h: heightMap[n - 1][j] });
	}

	let res = 0;

	while (!pq.isEmpty()) {
		const point = pq.dequeue().element;
		for (const dir of dirs) {
			const dx = point.x + dir[0];
			const dy = point.y + dir[1];

			if (dx >= 0 && dx < n && dy >= 0 && dy < m && !visited[dx][dy]) {
				visited[dx][dy] = true;
				res += Math.max(0, point.h - heightMap[dx][dy]);
				pq.enqueue({ x: dx, y: dy, h: Math.max(point.h, heightMap[dx][dy]) });
			}
		}
	}

	return res;
}

test('trapRainWater', () => {
	expect(
		trapRainWater([
			[1, 4, 3, 1, 3, 2],
			[3, 2, 1, 3, 2, 4],
			[2, 3, 3, 2, 3, 1],
		]),
	).toBe(4);
	expect(
		trapRainWater([
			[3, 3, 3, 3, 3],
			[3, 2, 2, 2, 3],
			[3, 2, 1, 2, 3],
			[3, 2, 2, 2, 3],
			[3, 3, 3, 3, 3],
		]),
	).toBe(10);
});
