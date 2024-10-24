function minSwaps(nums: number[]): number {
	const ones = nums.reduce((acc, num) => acc + +(num == 1), 0);
	let zeros = nums.slice(0, ones).reduce((acc, num) => acc + +(num == 0), 0);
	let res = zeros;

	for (let i = 0; i < nums.length - 1; i++) {
		const start = nums[i];
		const end = nums[(i + ones) % nums.length];
		if (start == end) {
			continue;
		}

		if (start == 1) {
			zeros++;
		} else if (start == 0) {
			zeros--;
			res = Math.min(res, zeros);
		}
	}

	return res;
}

test('minSwaps', () => {
	expect(minSwaps([0, 1, 0, 1, 1, 0, 0])).toBe(1);
	expect(minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0])).toBe(2);
	expect(minSwaps([1, 1, 0, 0, 1])).toBe(0);
});
