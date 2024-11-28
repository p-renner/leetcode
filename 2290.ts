import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function minimumObstacles(grid: number[][]): number {
	const directions = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];

	function isValid(row: number, col: number): boolean {
		return 0 <= row && row < grid.length && 0 <= col && col < grid[0].length;
	}

	const m = grid.length;
	const n = grid[0].length;

	const minObstacles = Array.from({ length: m }, () => Array(n).fill(Infinity));
	minObstacles[0][0] = grid[0][0];

	const pq = new MinPriorityQueue<number[]>();
	pq.enqueue([minObstacles[0][0], 0, 0], minObstacles[0][0]);

	while (pq.size() > 0) {
		const [obstacles, row, col] = pq.dequeue().element;

		if (row === m - 1 && col === n - 1) {
			return obstacles;
		}

		for (const [dr, dc] of directions) {
			const newRow = row + dr;
			const newCol = col + dc;

			if (isValid(newRow, newCol)) {
				const newObstacles = obstacles + grid[newRow][newCol];

				if (newObstacles < minObstacles[newRow][newCol]) {
					minObstacles[newRow][newCol] = newObstacles;
					pq.enqueue([newObstacles, newRow, newCol], newObstacles);
				}
			}
		}
	}

	return minObstacles[m - 1][n - 1];
}

test('minimumObstacles', () => {
	expect(
		minimumObstacles([
			[0, 1, 1],
			[1, 1, 0],
			[1, 1, 0],
		]),
	).toBe(2);
	expect(
		minimumObstacles([
			[0, 1, 0, 0, 0],
			[0, 1, 0, 1, 0],
			[0, 0, 0, 1, 0],
		]),
	).toBe(0);
});
