function countGoodStrings(low: number, high: number, zero: number, one: number): number {
	const dp: number[] = [1];

	for (let i = 1; i <= high; i++) {
		dp[i] = ((dp[i - zero] || 0) + (dp[i - one] || 0)) % (1e9 + 7);
	}

	return dp.slice(low, high + 1).reduce((acc, curr) => acc + curr) % (1e9 + 7);
}

test('countGoodStrings', () => {
	expect(countGoodStrings(3, 3, 1, 1)).toBe(8);
	expect(countGoodStrings(2, 3, 1, 2)).toBe(5);
	expect(countGoodStrings(200, 200, 10, 1)).toBe(764262396);
});
