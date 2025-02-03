function isArraySpecial(nums: number[]): boolean {
	let last = nums[0] % 2;

	for (let i = 1; i < nums.length; i++) {
		let curr = nums[i] % 2;

		if (curr == last) {
			return false;
		}

		last = curr;
	}

	return true;
}

test('isArraySpecial', () => {
	expect(isArraySpecial([1])).toBe(true);
	expect(isArraySpecial([2, 1, 4])).toBe(true);
	expect(isArraySpecial([4, 3, 1, 6])).toBe(false);
});
