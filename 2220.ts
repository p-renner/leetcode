function minBitFlips(start: number, goal: number): number {
	return (start ^ goal).toString(2).split('1').length - 1;
}

test('minBitFlips', () => {
	expect(minBitFlips(10, 7)).toBe(3);
	expect(minBitFlips(3, 4)).toBe(3);
});
