function minDifference(nums: number[]): number {
	if (nums.length <= 4) {
		return 0;
	}

	nums.sort((a, b) => a - b);

	return Math.min(
		nums[nums.length - 1] - nums[3],
		nums[nums.length - 2] - nums[2],
		nums[nums.length - 3] - nums[1],
		nums[nums.length - 4] - nums[0],
	);
}

test('minDifference', () => {
	expect(minDifference([5, 3, 2, 4])).toBe(0);
	expect(minDifference([1, 5, 0, 10, 14])).toBe(1);
	expect(minDifference([3, 100, 20])).toBe(0);
	expect(minDifference([1, 2, 3, 100, 20, 200])).toBe(2);
	expect(minDifference([6, 6, 0, 1, 1, 4, 6])).toBe(2);
});
