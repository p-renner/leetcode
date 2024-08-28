function dijkstra(n: number, map: any, s: number, d: number) {
	const visited = new Array(n).fill(0);
	const costs = new Array(n).fill(0);
	costs[s] = 1;

	while (true) {
		let node: number | undefined = undefined;

		for (let i = 0; i < visited.length; i++) {
			if (visited[i]) {
				continue;
			}

			if (node === undefined) {
				node = i;
			} else {
				node = costs[node] < costs[i] ? i : node;
			}
		}

		if (node === undefined) {
			break;
		}

		if (node === d) {
			return costs[d];
		}

		visited[node] = 1;

		if (map[node] === undefined) {
			continue;
		}

		let adjNodes = Object.keys(map[node]);

		for (let adj of adjNodes) {
			if (visited[adj]) {
				continue;
			}

			costs[adj] = Math.max(costs[adj], map[node][adj] * costs[node]);
		}
	}
	return costs[d];
}

function maxProbability(n: number, edges: number[][], succProb: number[], start: number, end: number): number {
	const map = {};

	for (let i = 0; i < edges.length; i++) {
		const [f, t] = edges[i];
		if (map[f] === undefined) {
			map[f] = {};
		}

		if (map[t] === undefined) {
			map[t] = {};
		}

		map[f][t] = succProb[i];
		map[t][f] = succProb[i];
	}

	if (map[end] === undefined) {
		return 0;
	}

	return dijkstra(n, map, start, end);
}

test('max probability', () => {
	expect(
		maxProbability(
			3,
			[
				[0, 1],
				[1, 2],
				[0, 2],
			],
			[0.5, 0.5, 0.2],
			0,
			2,
		),
	).toBe(0.25);
	expect(
		maxProbability(
			3,
			[
				[0, 1],
				[1, 2],
				[0, 2],
			],
			[0.5, 0.5, 0.3],
			0,
			2,
		),
	).toBe(0.3);
});
