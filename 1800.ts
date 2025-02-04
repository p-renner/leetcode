function maxAscendingSum(nums: number[]): number {
	let max = nums[0];
	let sum = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			sum += nums[i];
		} else {
			sum = nums[i];
		}

		max = Math.max(sum, max);
	}

	return max;
}

test('maxAscendingSum', () => {
	expect(maxAscendingSum([10, 20, 30, 5, 10, 50])).toBe(65);
	expect(maxAscendingSum([10, 20, 30, 40, 50])).toBe(150);
	expect(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])).toBe(33);
});
