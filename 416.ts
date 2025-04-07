function canPartition(nums: number[]): boolean {
	const sum = nums.reduce((acc, curr) => acc + curr, 0);

	if (sum % 2 !== 0) {
		return false;
	}

	const half = sum / 2;

	function subsetSum(target: number): boolean {
		const dp: boolean[] = new Array(target + 1).fill(false);
		dp[0] = true;

		for (const num of nums) {
			for (let i = target; i >= num; i--) {
				dp[i] = dp[i] || dp[i - num];
			}
		}

		return dp[target];
	}

	return subsetSum(half);
}

test('canPartition', () => {
	expect(canPartition([1, 5, 11, 5])).toBe(true);
	expect(canPartition([1, 2, 3, 5])).toBe(false);
});
