interface disjointSet {
	depth: number;
	parent?: disjointSet;
}

function maxNumEdgesToRemove(n: number, edges: number[][]): number {
	const alice = edges.filter((edge) => edge[0] != 2).sort((a, b) => b[0] - a[0]);
	const bob = edges.filter((edge) => edge[0] != 1).sort((a, b) => b[0] - a[0]);

	const aliceUsing = minTraverse(n, alice);

	if (!aliceUsing) {
		return -1;
	}

	const bobUsing = minTraverse(n, bob);

	if (!bobUsing) {
		return -1;
	}

	return edges.length - new Set([...aliceUsing, ...bobUsing]).size;
}

function minTraverse(n: number, edges: number[][]): Set<number[]> | null {
	if (edges.length == n - 1) {
		return new Set(edges);
	}
	let i = 1;
	const sets: disjointSet[] = [];

	for (let i = 1; i <= n; i++) {
		const curr: disjointSet = { depth: 0 };
		curr.parent = curr;
		sets[i] = curr;
	}

	const using = new Set<number[]>();
	while (i < n) {
		const curr = edges.shift();

		if (!curr) {
			return null;
		}

		const a = find(sets[curr[1]]);
		const b = find(sets[curr[2]]);

		if (a == b) {
			continue;
		}

		merge(a, b);
		using.add(curr);
		i++;
	}

	return using;
}

function find(set: disjointSet): disjointSet {
	if (set.parent == set) {
		return set;
	}

	set.parent = find(set.parent!);
	return set.parent;
}

function merge(a: disjointSet, b: disjointSet) {
	if (a.depth == b.depth) {
		a.parent = b;
		b.depth++;
		return;
	}

	if (a.depth > b.depth) {
		b.parent = a;
		return;
	}

	a.parent = b;
}

test('maxNumEdgesToRemove', () => {
	expect(
		maxNumEdgesToRemove(4, [
			[3, 1, 2],
			[3, 2, 3],
			[1, 1, 3],
			[1, 2, 4],
			[1, 1, 2],
			[2, 3, 4],
		]),
	).toBe(2);
	expect(
		maxNumEdgesToRemove(2, [
			[1, 1, 2],
			[2, 1, 2],
			[3, 1, 2],
		]),
	).toBe(2);
});
