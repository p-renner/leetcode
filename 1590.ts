function minSubarray(nums: number[], p: number): number {
	const remainder = nums.reduce((prev, curr) => prev + curr, 0) % p;

	if (remainder == 0) {
		return 0;
	}

	const prefixes = new Map<number, number>();
	prefixes.set(0, -1);

	let sum = 0;
	let len = nums.length;

	for (let i = 0; i < nums.length; i++) {
		sum = (sum + nums[i]) % p;

		let needed = (sum - remainder + p) % p;

		if (prefixes.has(needed)) {
			len = Math.min(len, i - prefixes.get(needed));
		}

		prefixes.set(sum, i);
	}

	return len == nums.length ? -1 : len;
}

test('minSubarray', () => {
	expect(minSubarray([3, 1, 4, 2], 6)).toBe(1);
	expect(minSubarray([1, 2, 3], 3)).toBe(0);
	expect(minSubarray([6, 3, 5, 2], 9)).toBe(2);
	expect(minSubarray([26, 19, 11, 14, 18, 4, 7, 1, 30, 23, 19, 8, 10, 6, 26, 3], 26)).toBe(3);
});
