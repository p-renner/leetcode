function pivotIndex(nums: number[]): number {
	let sum = nums.reduce((a, b) => a + b, 0);
	let leftSum = 0;

	for (let i = 0; i < nums.length; i++) {
		sum -= nums[i];
		leftSum += nums[i - 1] || 0;

		if (sum == leftSum) {
			return i;
		}
	}

	return -1;
}

test('pivotIndex', () => {
	expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
	expect(pivotIndex([1, 2, 3])).toBe(-1);
	expect(pivotIndex([2, 1, -1])).toBe(0);
});
