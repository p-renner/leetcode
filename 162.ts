function findPeakElement(nums: number[]): number {
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		const mid = Math.floor((left + right) / 2);

		if (nums[mid] > nums[mid + 1]) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}

	return left;
}

test('findPeakElement', () => {
	expect(findPeakElement([1, 2, 3, 1])).toBe(2);
	expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toBe(5);
});
