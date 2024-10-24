function minEatingSpeed(piles: number[], h: number): number {
	let left = 1;
	let right = Math.max(...piles);

	while (left < right) {
		const mid = Math.floor((left + right) / 2);

		if (piles.reduce((acc, pile) => acc + Math.ceil(pile / mid), 0) <= h) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}

	return left;
}

test('minEatingSpeed', () => {
	expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);
	expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toBe(30);
	expect(minEatingSpeed([30, 11, 23, 4, 20], 6)).toBe(23);
});
