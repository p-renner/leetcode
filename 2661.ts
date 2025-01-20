function firstCompleteIndex(arr: number[], mat: number[][]): number {
	const m = mat.length;
	const n = mat[0].length;
	const freqRow = new Map<number, number>();
	const freqCol = new Map<number, number>();
	const positions = new Map<number, [number, number]>();

	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			positions.set(mat[row][col], [row, col]);
		}
	}

	for (let i = 0; i < arr.length; i++) {
		const [row, col] = positions.get(arr[i]);
		const rowFreq = freqRow.get(row) || 0;

		if (rowFreq == n - 1) {
			return i;
		}
		freqRow.set(row, rowFreq + 1);

		const colFreq = freqCol.get(col) || 0;

		if (colFreq == m - 1) {
			return i;
		}
		freqCol.set(col, colFreq + 1);
	}

	return 0;
}

test('firstCompleteIndex', () => {
	expect(
		firstCompleteIndex(
			[1, 3, 4, 2],
			[
				[1, 4],
				[2, 3],
			],
		),
	).toBe(2);
	expect(
		firstCompleteIndex(
			[2, 8, 7, 4, 1, 3, 5, 6, 9],
			[
				[3, 2, 5],
				[1, 4, 6],
				[8, 7, 9],
			],
		),
	).toBe(3);
	expect(
		firstCompleteIndex(
			[1, 4, 5, 2, 6, 3],
			[
				[4, 3, 5],
				[1, 2, 6],
			],
		),
	).toBe(1);
});
