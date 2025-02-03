function check(nums: number[]): boolean {
	const min = Math.min(...nums);
	let prev = nums.indexOf(min);
	let n = nums.length;

	if (prev == 0) {
		while (nums[n - 1] == min) {
			n--;
		}
	}

	for (let i = 1; i < n; i++) {
		const curr = (prev + 1) % nums.length;

		if (nums[curr] < nums[prev]) {
			return false;
		}

		prev = curr;
	}

	return true;
}

test('check', () => {
	expect(check([3, 4, 5, 1, 2])).toBe(true);
	expect(check([2, 1, 3, 4])).toBe(false);
	expect(check([1, 2, 3])).toBe(true);
	expect(check([6, 10, 6])).toBe(true);
	expect(check([1, 4, 1, 2, 3, 5])).toBe(false);
});
