function maxOperations(nums: number[], k: number): number {
	const freqMap = new Map<number, number>();
	let count = 0;

	for (const num of nums.filter((num) => num < k)) {
		freqMap.set(num, (freqMap.get(num) || 0) + 1);
	}

	if (k % 2 == 0 && freqMap.has(k / 2)) {
		count += Math.floor(freqMap.get(k / 2)! / 2);
	}

	return (
		count +
		Array.from(freqMap.entries())
			.filter((entry) => entry[0] < k / 2)
			.reduce((prev, entry) => (prev += Math.min(entry[1], freqMap.get(k - entry[0]) || 0)), 0)
	);
}

test('maxOperations', () => {
	expect(maxOperations([1, 2, 3, 4], 5)).toBe(2);
	expect(maxOperations([3, 1, 3, 4, 3], 6)).toBe(1);
});
