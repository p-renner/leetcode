function maximumUniqueSubarray(nums: number[]): number {
	let seen = new Set();
	let r = 0;
	let res = 0;
	let max = 0;

	for (let l = 0; l < nums.length; l++) {
		res -= nums[l - 1] || 0;
		seen.delete(nums[l - 1]);

		while (r < nums.length && !seen.has(nums[r])) {
			seen.add(nums[r]);
			res += nums[r];
			r++;
		}
		max = Math.max(max, res);

		if (r == nums.length) {
			break;
		}
	}

	return max;
}

test('maximumUniqueSubarray', () => {
	expect(maximumUniqueSubarray([4, 2, 4, 5, 6])).toBe(17);
	expect(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])).toBe(8);
});
