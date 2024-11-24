function maxMatrixSum(matrix: number[][]): number {
	let negCount = 0;
	let min = Infinity;
	let res = 0;

	for (const row of matrix) {
		for (const num of row) {
			if (num < 0) {
				negCount++;
			}

			const abs = Math.abs(num);
			min = Math.min(abs, min);
			res += abs;
		}
	}

	if (min != 0 && negCount % 2 == 1) {
		return res - min * 2;
	}

	return res;
}

test('maxMatrixSum', () => {
	expect(
		maxMatrixSum([
			[1, -1],
			[-1, 1],
		]),
	).toBe(4);
	expect(
		maxMatrixSum([
			[1, 2, 3],
			[-1, -2, -3],
			[1, 2, 3],
		]),
	).toBe(16);
});
