function longestSubarray(nums: number[]): number {
	const max = Math.max(...nums);
	let res = 0;
	let curr = 0;

	for (const num of nums) {
		if (num != max) {
			curr = 0;
			continue;
		}

		curr += 1;
		res = Math.max(curr, res);
	}

	return res;
}

test('longestSubarray', () => {
	expect(longestSubarray([1, 2, 3, 3, 2, 2])).toBe(2);
	expect(longestSubarray([1, 2, 3, 4])).toBe(1);
});
