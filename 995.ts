// Editorial solution with auxiliary array
function minKBitFlips(nums: number[], k: number): number {
	const flipped = new Array(nums.length).fill(false);
	let pastFlips = 0;
	let flips = 0;

	for (let i = 0; i < nums.length; i++) {
		if (i >= k && flipped[i - k]) {
			pastFlips -= 1;
		}

		if (pastFlips % 2 === nums[i]) {
			if (i + k > nums.length) {
				return -1;
			}

			flipped[i] = true;
			pastFlips++;
			flips++;
		}
	}

	return flips;
}

test('minKBitFlips', () => {
	expect(minKBitFlips([0, 1, 0], 1)).toBe(2);
	expect(minKBitFlips([1, 1, 0], 2)).toBe(-1);
	expect(minKBitFlips([0, 0, 0, 1, 0, 1, 1, 0], 3)).toBe(3);
	expect(minKBitFlips([0, 1], 2)).toBe(-1);
});
