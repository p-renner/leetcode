function longestMonotonicSubarray(nums: number[]): number {
	let res = 1;
	let [inc, dec] = [1, 1];

	for (let i = 1; i < nums.length; i++) {
		res = Math.max(res, inc, dec);

		if (nums[i] == nums[i - 1]) {
			inc = 1;
			dec = 1;
			continue;
		}

		if (nums[i] < nums[i - 1]) {
			dec += 1;
			inc = 1;
			continue;
		}

		inc += 1;
		dec = 1;
	}

	return Math.max(res, inc, dec);
}

test('longestMonotonicSubarray', () => {
	expect(longestMonotonicSubarray([1, 4, 3, 3, 2])).toBe(2);
	expect(longestMonotonicSubarray([3, 3, 3, 3])).toBe(1);
	expect(longestMonotonicSubarray([3, 2, 1])).toBe(3);
});
