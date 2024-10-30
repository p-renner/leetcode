function minimumMountainRemovals(nums: number[]): number {
	const dp = Array.from({ length: nums.length }, () => Array(2).fill(1));

	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				dp[i][0] = Math.max(dp[i][0], dp[j][0] + 1);
			}
		}
	}

	for (let i = nums.length - 2; i >= 0; i--) {
		for (let j = nums.length - 1; j > i; j--) {
			if (nums[i] > nums[j]) {
				dp[i][1] = Math.max(dp[i][1], dp[j][1] + 1);
			}
		}
	}

	return nums.length - dp.reduce((acc, [a, b]) => (a > 1 && b > 1 ? Math.max(acc, a + b - 1) : acc), 0);
}

test('minimumMountainRemovals', () => {
	expect(minimumMountainRemovals([1, 3, 1])).toBe(0);
	expect(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1])).toBe(3);
	expect(minimumMountainRemovals([4, 3, 2, 1, 1, 2, 3, 1])).toBe(4);
});
