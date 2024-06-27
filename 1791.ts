function findCenter(edges: number[][]): number {
	if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
		return edges[0][0];
	}

	return edges[0][1];
}

test('findCenter', () => {
	expect(
		findCenter([
			[1, 2],
			[2, 3],
			[4, 2],
		]),
	).toBe(2);
	expect(
		findCenter([
			[1, 2],
			[5, 1],
			[1, 3],
			[1, 4],
		]),
	).toBe(1);
});
