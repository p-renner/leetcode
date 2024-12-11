function maximumBeauty(nums: number[], k: number): number {
	nums.sort((a, b) => a - b);

	let end = 1;
	const k2 = 2 * k;
	let max = 1;

	for (let i = 0; i < nums.length; i++) {
		while (nums[end] - nums[i] <= k2) {
			end++;
		}

		max = Math.max(end - i, max);
	}

	return max;
}

test('maximumBeauty', () => {
	expect(maximumBeauty([4, 6, 1, 2], 2)).toBe(3);
	expect(maximumBeauty([1, 1, 1, 1], 10)).toBe(4);
	expect(maximumBeauty([76, 0], 16)).toBe(1);
	expect(maximumBeauty([5, 57, 46], 15)).toBe(2);
	expect(maximumBeauty([69, 0, 87, 63, 72, 65, 72, 62, 31, 84, 50, 52, 0], 12)).toBe(8);
});
