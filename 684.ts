function findRedundantConnection(edges: number[][]): number[] {
	const size = new Array(edges.length).fill(0);
	const representative = [...edges.keys()];

	function union(c1: number, c2: number): boolean {
		const [p1, p2] = [find(c1), find(c2)];

		if (p1 == p2) {
			return false;
		}

		if (size[p1] > size[p2]) {
			representative[p2] = p1;
			size[p1] += size[p2];
		} else {
			representative[p1] = p2;
			size[p2] += size[p1];
		}

		return true;
	}

	function find(c: number) {
		if (c != representative[c]) {
			representative[c] = find(representative[c]);
		}

		return representative[c];
	}

	for (const edge of edges) {
		if (!union(edge[0], edge[1])) {
			return edge;
		}
	}
	return [];
}

test('findRedundantConnection', () => {
	expect(
		findRedundantConnection([
			[1, 2],
			[1, 3],
			[2, 3],
		]),
	).toStrictEqual([2, 3]);
});
