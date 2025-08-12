function numberOfWays(n: number, x: number): number {
	const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
	dp[0][0] = 1;

	for (let i = 1; i <= n; i++) {
		const curr = Math.pow(i, x);

		for (let j = 0; j <= n; j++) {
			dp[i][j] = dp[i - 1][j];

			if (j >= curr) {
				dp[i][j] = (dp[i][j] + dp[i - 1][j - curr]) % 1000000007;
			}
		}
	}

	return dp[n][n];
}

test('numberOfWays', () => {
	expect(numberOfWays(10, 2)).toBe(1);
	expect(numberOfWays(4, 1)).toBe(2);
	expect(numberOfWays(6, 1)).toBe(4);
});
