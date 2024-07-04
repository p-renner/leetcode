function longestSubarray(nums: number[]): number {
	let zero = nums.indexOf(0);

	if (zero == -1) {
		return nums.length - 1;
	}

	let count = zero;
	let max = count;

	for (let i = zero + 1; i < nums.length; i++) {
		if (nums[i] == 1) {
			count++;
			max = Math.max(count, max);
			continue;
		}

		count -= zero;
		zero = count;
	}

	return max;
}

test('longestSubarray', () => {
	expect(longestSubarray([1, 1, 0, 1])).toBe(3);
	expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).toBe(5);
	expect(longestSubarray([1, 1, 1])).toBe(2);
});
