function countFairPairs(nums: number[], lower: number, upper: number): number {
	nums.sort((a, b) => a - b);
	return bound(upper + 1) - bound(lower);

	function bound(value: number): number {
		let left = 0;
		let right = nums.length - 1;
		let count = 0;

		while (left < right) {
			const sum = nums[left] + nums[right];
			if (sum < value) {
				count += right - left;
				left += 1;
			} else {
				right -= 1;
			}
		}
		return count;
	}
}

test('countFairPairs', () => {
	expect(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6)).toBe(6);
	expect(countFairPairs([1, 7, 9, 2, 5], 11, 11)).toBe(1);
});
