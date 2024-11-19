function maximumSubarraySum(nums: number[], k: number): number {
	const freq = new Map();
	let max = 0;
	let sum = 0;
	let begin = 0;
	let end = 0;

	while (end < nums.length) {
		const curr = nums[end];
		const last = freq.has(curr) ? freq.get(curr) : -1;

		while (begin <= last || end - begin + 1 > k) {
			sum -= nums[begin];
			begin += 1;
		}

		freq.set(curr, end);

		sum += nums[end];

		if (end - begin + 1 == k) {
			max = Math.max(max, sum);
		}

		end++;
	}
	return max;
}

test('maximumSubarraySum', () => {
	//expect(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3)).toBe(15);
	//expect(maximumSubarraySum([4, 4, 4], 3)).toBe(0);
	//expect(maximumSubarraySum([1, 2, 2], 2)).toBe(3);
	expect(maximumSubarraySum([1, 1, 1, 1, 1, 1], 2)).toBe(0);
	//expect(maximumSubarraySum([5, 3, 3, 1, 1], 3)).toBe(0);
});
