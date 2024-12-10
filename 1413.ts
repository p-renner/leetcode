function minStartValue(nums: number[]): number {
	for (let i = 1; i < nums.length; i++) {
		nums[i] += nums[i - 1];
	}

	return 1 - Math.min(...nums, 0);
}

test('minStartValue', () => {
	expect(minStartValue([-3, 2, -3, 4, 2])).toBe(5);
	expect(minStartValue([1, 2])).toBe(1);
	expect(minStartValue([1, -2, -3])).toBe(5);
	expect(minStartValue([2, 3, 5, -5, -1])).toBe(1);
});
