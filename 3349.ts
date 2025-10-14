function hasIncreasingSubarrays(nums: number[], k: number): boolean {
	if (k == 1 && nums.length >= 2) {
		return true;
	}

	let inc = 1;
	let prevInc = 0;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			inc++;

			if ((inc >= k && prevInc >= k) || inc == 2 * k) {
				return true;
			}
		} else {
			prevInc = inc;
			inc = 1;
		}
	}

	return false;
}

test('hasIncreasingSubarrays', () => {
	expect(hasIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1], 3)).toBe(true);
	expect(hasIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7], 5)).toBe(false);
});
