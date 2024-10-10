function maxWidthRamp(nums: number[]): number {
	return Array.from({ length: nums.length }, (_, i) => i)
		.sort((i, j) => nums[i] - nums[j])
		.reduce((prev, curr) => [Math.min(prev[0], curr), Math.max(prev[1], curr - prev[0])], [nums.length, 0])[1];
}

test('maxWidthRamp', () => {
	expect(maxWidthRamp([6, 0, 8, 2, 1, 5])).toBe(4);
	expect(maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1])).toBe(7);
});
