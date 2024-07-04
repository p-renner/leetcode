function longestOnes(nums: number[], k: number): number {
	let zeroes = 0;
	let count = 0;
	let max = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != 0) {
			count++;
			max = Math.max(max, count);
			continue;
		}
		zeroes++;

		if (zeroes > k) {
			while (nums[i - count] == 1) {
				count--;
			}
			zeroes--;
			continue;
		}
		count++;
		max = Math.max(max, count);
	}
	return max;
}

test('longestOnes', () => {
	expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
	expect(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).toBe(10);
});
