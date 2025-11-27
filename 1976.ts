import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function countPaths(n: number, roads: number[][]): number {
	const mod = 1e9 + 7;
	const graph = Array.from({ length: n }, () => []);

	for (const [u, v, w] of roads) {
		graph[u].push([v, w]);
		graph[v].push([u, w]);
	}

	const minHeap = new MinPriorityQueue<number[]>((x: number[]) => x[1]);
	const shortestTime = new Array(n).fill(Infinity);
	const pathCount = new Array(n).fill(0);

	minHeap.enqueue([0, 0]);
	shortestTime[0] = 0;
	pathCount[0] = 1;

	while (!minHeap.isEmpty()) {
		const [u, time] = minHeap.dequeue();

		if (time > shortestTime[u]) {
			continue;
		}

		for (const [v, w] of graph[u]) {
			const newTime = time + w;

			if (newTime < shortestTime[v]) {
				shortestTime[v] = newTime;
				pathCount[v] = pathCount[u];
				minHeap.enqueue([v, newTime]);
			} else if (newTime === shortestTime[v]) {
				pathCount[v] = (pathCount[v] + pathCount[u]) % mod;
			}
		}
	}

	return pathCount[n - 1];
}

test('countPaths', () => {
	expect(
		countPaths(7, [
			[0, 6, 7],
			[0, 1, 2],
			[1, 2, 3],
			[1, 3, 3],
			[6, 3, 3],
			[3, 5, 1],
			[6, 5, 1],
			[2, 5, 1],
			[0, 4, 5],
			[4, 6, 2],
		]),
	).toBe(4);
	expect(countPaths(2, [[1, 0, 10]])).toBe(1);
});
