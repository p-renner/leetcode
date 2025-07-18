function maximumLength(nums: number[], k: number): number {
	const dp: number[][] = Array.from({ length: k }, () => new Array(k).fill(0));
	let res = 0;

	for (let i = 0; i < nums.length; i++) {
		const mod = nums[i] % k;

		for (let j = 0; j < k; j++) {
			dp[j][mod] = dp[mod][j] + 1;
			res = Math.max(res, dp[j][mod]);
		}
	}

	return res;
}

test('maximumLength', () => {
	expect(maximumLength([1, 2, 3, 4, 5], 2)).toBe(5);
	expect(maximumLength([1, 4, 2, 3, 1, 4], 3)).toBe(4);
});
