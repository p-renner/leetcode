function maxEqualRowsAfterFlips(matrix: number[][]): number {
	const map = new Map<string, number>();

	for (let i = 0; i < matrix.length; i++) {
		let col = matrix[i];

		if (col[0] == 1) {
			col = col.map((val) => (val == 1 ? 0 : 1));
		}

		const str = col.join('');
		map.set(str, (map.get(str) || 0) + 1);
	}

	return Math.max(...map.values());
}

test('maxEqualRowsAfterFlips', () => {
	expect(
		maxEqualRowsAfterFlips([
			[0, 1],
			[1, 1],
		]),
	).toBe(1);
	expect(
		maxEqualRowsAfterFlips([
			[0, 1],
			[1, 0],
		]),
	).toBe(2);
	expect(
		maxEqualRowsAfterFlips([
			[0, 0, 0],
			[0, 0, 1],
			[1, 1, 0],
		]),
	).toBe(2);
	expect(
		maxEqualRowsAfterFlips([
			[1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
			[1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
			[1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
		]),
	).toBe(2);
});
