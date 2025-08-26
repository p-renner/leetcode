function areaOfMaxDiagonal(dimensions: number[][]): number {
	const sizeDiag = dimensions.map(([h, w]) => {
		return [h * w, Math.sqrt(h * h + w * w)];
	});

	sizeDiag.sort((a, b) => {
		if (a[1] === b[1]) {
			return b[0] - a[0];
		}

		return b[1] - a[1];
	});

	return sizeDiag[0][0];
}

test('areaOfMaxDiagonal', () => {
	expect(
		areaOfMaxDiagonal([
			[9, 3],
			[8, 6],
		]),
	).toBe(48);
	expect(
		areaOfMaxDiagonal([
			[3, 4],
			[4, 3],
		]),
	).toBe(12);
});
