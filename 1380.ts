function luckyNumbers(matrix: number[][]): number[] {
	const rowMin = matrix.map((row) => Math.min(...row));
	const colMax: Set<number> = new Set();

	for (let i = 0; i < matrix[0].length; i++) {
		colMax.add(Math.max(...matrix.map((row) => row[i])));
	}

	return rowMin.filter((x) => colMax.has(x));
}

test('luckyNumbers', () => {
	expect(
		luckyNumbers([
			[3, 7, 8],
			[9, 11, 13],
			[15, 16, 17],
		]),
	).toStrictEqual([15]);
	expect(
		luckyNumbers([
			[1, 10, 4, 2],
			[9, 3, 8, 7],
			[15, 16, 17, 12],
		]),
	).toStrictEqual([12]);
	expect(
		luckyNumbers([
			[7, 8],
			[1, 2],
		]),
	).toStrictEqual([7]);
});
