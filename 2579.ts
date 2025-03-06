function coloredCells(n: number): number {
	const sumToN = (n: number) => (n * (n + 1)) / 2;

	return 1 + sumToN(n - 1) * 4;
}

test('coloredCells', () => {
	expect(coloredCells(1)).toBe(1);
	expect(coloredCells(2)).toBe(5);
	expect(coloredCells(3)).toBe(13);
	expect(coloredCells(4)).toBe(25);
	expect(coloredCells(5)).toBe(41);
});
