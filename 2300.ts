function successfulPairs(spells: number[], potions: number[], success: number): number[] {
	const sorted = potions.sort((a, b) => a - b);

	return spells.map((spell) => {
		let left = 0;
		let right = sorted.length - 1;

		while (left <= right) {
			const mid = Math.floor((left + right) / 2);

			if (sorted[mid] * spell >= success && (mid - 1 < 0 || sorted[mid - 1] * spell < success)) {
				return sorted.length - mid;
			} else if (sorted[mid] * spell < success) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}

		return 0;
	});
}

test('successfulPairs', () => {
	expect(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7)).toStrictEqual([4, 0, 3]);
	expect(successfulPairs([3, 1, 2], [8, 5, 8], 16)).toStrictEqual([2, 0, 2]);
	expect(successfulPairs([15, 8, 19], [38, 36, 23], 328)).toStrictEqual([3, 0, 3]);
});
