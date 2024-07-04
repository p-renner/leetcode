function findMaxAverage(nums: number[], k: number): number {
	let max = nums.slice(0, k).reduce((a, b) => a + b, 0);
	let sum = max;

	for (let i = k; i < nums.length; i++) {
		sum += nums[i] - nums[i - k];
		max = Math.max(max, sum);
	}
	return max / k;
}

test('findMaxAverage', () => {
	expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
	expect(findMaxAverage([5], 1)).toBe(5);
});
