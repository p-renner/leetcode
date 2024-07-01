function threeConsecutiveOdds(arr: number[]): boolean {
	let prev = arr[0] % 2;

	for (let i = 1; i < arr.length; i++) {
		const curr = arr[i] % 2;

		if (prev == 1 && prev == curr && prev == arr[i + 1] % 2) {
			return true;
		}

		prev = curr;
	}

	return false;
}

test('threeConsecutiveOdds', () => {
	expect(threeConsecutiveOdds([2, 6, 4, 1])).toBe(false);
	expect(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])).toBe(true);
	expect(threeConsecutiveOdds([1, 3])).toBe(false);
});
