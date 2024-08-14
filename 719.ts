function smallestDistancePair(nums: number[], k: number): number {
	const dists = new Array<number>(Math.max(...nums) + 1).fill(0);

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			const dist = Math.abs(nums[i] - nums[j]);

			dists[dist]++;
		}
	}

	for (let i = 0; i < dists.length; i++) {
		k -= dists[i];
		if (k <= 0) {
			return i;
		}
	}

	return 0;
}

test('smallestDistancePair', () => {
	expect(smallestDistancePair([1, 3, 1], 1)).toBe(0);
	expect(smallestDistancePair([1, 1, 1], 2)).toBe(0);
	expect(smallestDistancePair([1, 6, 1], 3)).toBe(5);
});
