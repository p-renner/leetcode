interface disjointSet {
	parent?: disjointSet;
	depth: number;
	weights: Set<number>;
}

function minimumCost(n: number, edges: number[][], query: number[][]): number[] {
	const sets: disjointSet[] = [];

	for (let i = 0; i < n; i++) {
		const curr: disjointSet = { depth: 0, weights: new Set() };
		curr.parent = curr;
		sets[i] = curr;
	}

	for (let i = 0; i < edges.length; i++) {
		const a = find(sets[edges[i][0]]);
		const b = find(sets[edges[i][1]]);

		if (a == b) {
			a.weights.add(edges[i][2]);
			continue;
		}

		merge(a, b, edges[i][2]);
	}

	const res: number[] = [];

	for (let i = 0; i < query.length; i++) {
		const a = find(sets[query[i][0]]);
		const b = find(sets[query[i][1]]);

		if (a == b) {
			const weights = a.weights.values();
			let sum = weights.next().value;

			for (const weight of weights) {
				sum = sum & weight;
			}

			res.push(sum);
		} else {
			res.push(-1);
		}
	}

	return res;
}

function find(set: disjointSet): disjointSet {
	if (set.parent == set) {
		return set;
	}

	set.parent = find(set.parent!);
	return set.parent;
}

function merge(a: disjointSet, b: disjointSet, weight: number) {
	if (a.depth == b.depth) {
		a.parent = b;
		b.depth++;
		b.weights = new Set([...a.weights, ...b.weights, weight]);
		a.weights = new Set();
		return;
	}

	if (a.depth > b.depth) {
		b.parent = a;
		a.weights = new Set([...a.weights, ...b.weights, weight]);
		b.weights = new Set();
		return;
	}

	a.parent = b;
	b.weights = new Set([...a.weights, ...b.weights, weight]);
	a.weights = new Set();
}

test('minimumCost', () => {
	expect(
		minimumCost(
			5,
			[
				[0, 1, 7],
				[1, 3, 7],
				[1, 2, 1],
			],
			[
				[0, 3],
				[3, 4],
			],
		),
	).toStrictEqual([1, -1]);
	expect(
		minimumCost(
			3,
			[
				[0, 2, 7],
				[0, 1, 15],
				[1, 2, 6],
				[1, 2, 1],
			],
			[[1, 2]],
		),
	).toStrictEqual([0]);

	expect(
		minimumCost(
			9,
			[
				[3, 7, 2],
				[8, 0, 6],
				[7, 6, 4],
				[5, 0, 5],
				[2, 7, 2],
				[6, 0, 5],
				[0, 8, 4],
				[6, 1, 4],
			],
			[
				[6, 0],
				[1, 8],
			],
		),
	).toStrictEqual([0, 0]);
});
