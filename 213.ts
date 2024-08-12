function rob(nums: number[]): number {
	if (nums.length === 1) return nums[0];

	return Math.max(
		nums.slice(1).reduce(([a, b], num) => ([a, b] = [b, Math.max(a + num, b)]), [0, 0])[1],
		nums.slice(0, -1).reduce(([a, b], num) => ([a, b] = [b, Math.max(a + num, b)]), [0, 0])[1],
	);
}

test('rob', () => {
	expect(rob([2, 3, 2])).toBe(3);
	expect(rob([1, 2, 3, 1])).toBe(4);
	expect(rob([0])).toBe(0);
	expect(rob([1])).toBe(1);
	expect(rob([1, 2])).toBe(2);
});
