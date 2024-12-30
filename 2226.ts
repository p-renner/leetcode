function maximumCandies(candies: number[], k: number): number {
	function canEat(c: number): boolean {
		return candies.reduce((acc, curr) => acc + Math.floor(curr / c), 0) >= k;
	}

	let start = 0;
	let end = Math.floor(candies.reduce((acc, curr) => acc + curr, 0) / k);
	let result = 0;

	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		let childrenGotCandies = 0;

		for (let candyPile of candies) {
			childrenGotCandies += Math.floor(candyPile / mid);
		}

		if (!canEat(mid)) {
			end = mid - 1;
		} else {
			result = mid;
			start = mid + 1;
		}
	}

	return result;
}

test('maximumCandies', () => {
	expect(maximumCandies([5, 8, 6], 3)).toBe(5);
	expect(maximumCandies([2, 5], 11)).toBe(0);
	expect(maximumCandies([4, 7, 5], 4)).toBe(3);
});
