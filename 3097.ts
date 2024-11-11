function minimumSubarrayLength(nums: number[], k: number): number {
	let min = Infinity;
	let start = 0;
	let end = 0;
	const bitCounts = new Array(32).fill(0);

	while (end < nums.length) {
		for (let i = 0; i < 32; i++) {
			if (nums[end] & (1 << i)) {
				bitCounts[i]++;
			}
		}

		while (start <= end && convertBitsToNum(bitCounts) >= k) {
			min = Math.min(min, end - start + 1);

			for (let i = 0; i < 32; i++) {
				if (nums[start] & (1 << i)) {
					bitCounts[i]--;
				}
			}
			start++;
		}

		end++;
	}

	return min === Infinity ? -1 : min;
}

function convertBitsToNum(arr: number[]): number {
	let num = 0;

	for (let i = 0; i < 32; i++) {
		if (arr[i] > 0) {
			num |= 1 << i;
		}
	}

	return num;
}

test('minimumSubarrayLength', () => {
	expect(minimumSubarrayLength([1, 2, 3], 2)).toBe(1);
	expect(minimumSubarrayLength([2, 1, 8], 10)).toBe(3);
	expect(minimumSubarrayLength([1, 2], 0)).toBe(1);
});
