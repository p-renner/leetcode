function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
	const seen = new Set<number>();

	for (const [_, to] of edges) {
		seen.add(to);
	}

	const res: number[] = [];
	for (let i = 0; i < n; i++) {
		if (seen.has(i)) {
			continue;
		}

		res.push(i);
	}

	return res;
}

test('findSmallestSetOfVertices', () => {
	expect(
		findSmallestSetOfVertices(6, [
			[0, 1],
			[0, 2],
			[2, 5],
			[3, 4],
			[4, 2],
		]),
	).toStrictEqual([0, 3]);
	expect(
		findSmallestSetOfVertices(5, [
			[0, 1],
			[2, 1],
			[3, 1],
			[1, 4],
			[2, 4],
		]),
	).toStrictEqual([0, 2, 3]);
});
