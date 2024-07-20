function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
	const matrix = Array.from({ length: rowSum.length }, () => Array.from({ length: colSum.length }, () => 0));

	return matrix.map((row, i) => {
		return row.map((_, j) => {
			const min = Math.min(rowSum[i], colSum[j]);
			rowSum[i] -= min;
			colSum[j] -= min;
			return min;
		});
	});
}

test('restoreMatrix', () => {
	expect(restoreMatrix([3, 8], [4, 7])).toStrictEqual([
		[3, 0],
		[1, 7],
	]);
	expect(restoreMatrix([5, 7, 10], [8, 6, 8])).toStrictEqual([
		[5, 0, 0],
		[3, 4, 0],
		[0, 2, 8],
	]);
});
