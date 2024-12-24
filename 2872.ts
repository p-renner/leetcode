function maxKDivisibleComponents(n: number, edges: number[][], values: number[], k: number): number {
	const adj = new Map<number, number[]>();

	for (const [a, b] of edges) {
		if (!adj.has(a)) {
			adj.set(a, []);
		}

		if (!adj.has(b)) {
			adj.set(b, []);
		}

		adj.get(a).push(b);
		adj.get(b).push(a);
	}

	let res = 0;

	function dfs(node: number, parent: number): number {
		let sum = values[node];

		for (const child of adj.get(node) || []) {
			if (child === parent) {
				continue;
			}

			sum += dfs(child, node);
		}

		if (sum % k === 0) {
			res++;
			return 0;
		}

		return sum;
	}

	dfs(0, -1);
	return res;
}

test('maxKDivisibleComponents', () => {
	expect(
		maxKDivisibleComponents(
			5,
			[
				[0, 2],
				[1, 2],
				[1, 3],
				[2, 4],
			],
			[1, 8, 1, 4, 4],
			6,
		),
	).toBe(2);
	expect(
		maxKDivisibleComponents(
			7,
			[
				[0, 1],
				[0, 2],
				[1, 3],
				[1, 4],
				[2, 5],
				[2, 6],
			],
			[3, 0, 6, 1, 5, 2, 1],
			3,
		),
	).toBe(3);
	expect(maxKDivisibleComponents(1, [], [0], 1)).toBe(1);
});
