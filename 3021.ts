function flowerGame(n: number, m: number): number {
	return Math.floor((n * m) / 2);
}

test('flowerGame', () => {
	expect(flowerGame(3, 2)).toBe(3);
	expect(flowerGame(1, 1)).toBe(0);
});
