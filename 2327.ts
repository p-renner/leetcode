function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
	const MOD = 1000000007;
	const dp = Array.from({ length: n + 1 }, () => new Array(forget).fill(0));
	dp[1][0] = 1;

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j < Math.min(i, forget); j++) {
			dp[i][j] = dp[i - 1][j - 1];
		}

		for (let j = delay - 1; j <= forget - 2; j++) {
			dp[i][0] = (dp[i][0] + dp[i - 1][j]) % MOD;
		}
	}

	return dp[n].reduce((acc, curr) => {
		return (acc + curr) % MOD;
	});
}

test('peopleAwareOfSecret', () => {
	expect(peopleAwareOfSecret(6, 2, 4)).toBe(5);
	expect(peopleAwareOfSecret(4, 1, 3)).toBe(6);
	expect(peopleAwareOfSecret(4, 1, 4)).toBe(8);
	expect(peopleAwareOfSecret(684, 18, 496)).toBe(653668527);
});
