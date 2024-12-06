function maxCount(banned: number[], n: number, maxSum: number): number {
	const bannedSet = new Set(banned);
	let sum = 0;
	let count = 0;

	for (let i = 1; i < n + 1; i++) {
		if (bannedSet.has(i)) {
			continue;
		}

		sum += i;

		if (sum > maxSum) {
			break;
		}

		count++;
	}

	return count;
}

test('maxCount', () => {
	expect(maxCount([1, 6, 5], 5, 6)).toBe(2);
	expect(maxCount([1, 2, 3, 4, 5, 6, 7], 8, 1)).toBe(0);
	expect(maxCount([11], 7, 50)).toBe(7);
});
