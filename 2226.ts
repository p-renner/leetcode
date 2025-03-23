function maximumCandies(candies: number[], k: number): number {
	let min = 0;
	let max = Math.floor(candies.reduce((a, b) => a + b, 0) / k);

	while (min <= max) {
		const mid = Math.floor((min + max) / 2);

		if (checkCandies(mid)) {
			min = mid + 1;
		} else {
			max = mid - 1;
		}
	}

	return max;

	function checkCandies(amount: number): boolean {
		let n = 0;

		for (const candy of candies) {
			n += Math.floor(candy / amount);

			if (n >= k) {
				return true;
			}
		}

		return false;
	}
}

test('maximumCandies', () => {
	expect(maximumCandies([5, 8, 6], 3)).toBe(5);
	expect(maximumCandies([2, 5], 11)).toBe(0);
	expect(maximumCandies([1, 2, 6, 8, 6, 7, 3, 5, 2, 5], 3)).toBe(6);
});
