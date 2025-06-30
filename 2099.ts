function maxSubsequence(nums: number[], k: number): number[] {
	return nums
		.map((num, i) => [num, i])
		.sort(([a], [b]) => b - a)
		.splice(0, k)
		.sort(([_, i], [__, j]) => i - j)
		.map(([num]) => num);
}

test('maxSubsequence', () => {
	expect(maxSubsequence([2, 1, 3, 3], 2)).toStrictEqual([3, 3]);
	expect(maxSubsequence([-1, -2, 3, 4], 3)).toStrictEqual([-1, 3, 4]);
});
