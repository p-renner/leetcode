function rob(nums: number[]): number {
	return nums.reduce(([a, b], num) => ([a, b] = [b, Math.max(a + num, b)]), [0, 0])[1];
}

test('rob', () => {
	expect(rob([1, 2, 3, 1])).toBe(4);
	expect(rob([2, 7, 9, 3, 1])).toBe(12);
	expect(rob([2, 1, 1, 2])).toBe(4);
});
