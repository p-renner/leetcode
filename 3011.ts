function canSortArray(nums: number[]): boolean {
	const bits = nums.map((n) => (n == 0 ? 0 : n.toString(2).match(/1/g)?.length));
	let largest = nums[0];
	let prev = 0;

	for (let i = 1; i < nums.length; i++) {
		if (bits[i] != bits[i - 1]) {
			prev = largest;
		}

		if (prev > nums[i]) {
			return false;
		}

		if (largest < nums[i]) {
			largest = nums[i];
		}
	}

	return true;
}

test('canSortArray', () => {
	expect(canSortArray([8, 4, 2, 30, 15])).toBe(true);
	expect(canSortArray([1, 2, 3, 4, 5])).toBe(true);
	expect(canSortArray([3, 16, 8, 4, 2])).toBe(false);
});
