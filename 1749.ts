function maxAbsoluteSum(nums: number[]): number {
	let [minSum, maxSum] = [nums[0], nums[0]];
	let [curMinSum, curMaxSum] = [0, 0];

	for (let n of nums) {
		curMinSum = Math.min(curMinSum, 0) + n;
		curMaxSum = Math.max(curMaxSum, 0) + n;
		minSum = Math.min(minSum, curMinSum);
		maxSum = Math.max(maxSum, curMaxSum);
	}

	return Math.max(maxSum, Math.abs(minSum));
}

test('maxAbsoluteSum', () => {
	expect(maxAbsoluteSum([1, -3, 2, 3, -4])).toBe(5);
	expect(maxAbsoluteSum([2, -5, 1, -4, 3, -2])).toBe(8);
	expect(maxAbsoluteSum([1, 2, 3, -4])).toBe(6);
});
