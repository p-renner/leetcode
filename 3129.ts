function numberOfStableArrays(zero: number, one: number, limit: number): number {
	const MOD = 1_000_000_007n;
	const dp = Array.from({ length: zero + 1 }, () => Array.from({ length: one + 1 }, () => [0n, 0n]));

	for (let i = 1; i <= zero; i++) {
		dp[i][0][0] = i <= limit ? 1n : 0n;
	}

	for (let j = 1; j <= one; j++) {
		dp[0][j][1] = j <= limit ? 1n : 0n;
	}

	for (let i = 1; i <= zero; i++) {
		for (let j = 1; j <= one; j++) {
			dp[i][j][0] = (dp[i - 1][j][0] + dp[i - 1][j][1]) % MOD;

			if (i > limit) {
				dp[i][j][0] = (dp[i][j][0] - dp[i - 1 - limit][j][1] + MOD) % MOD;
			}

			dp[i][j][1] = (dp[i][j - 1][0] + dp[i][j - 1][1]) % MOD;

			if (j > limit) {
				dp[i][j][1] = (dp[i][j][1] - dp[i][j - 1 - limit][0] + MOD) % MOD;
			}
		}
	}

	return Number((dp[zero][one][0] + dp[zero][one][1]) % MOD);
}

test('numberOfStableArrays', () => {
	expect(numberOfStableArrays(1, 1, 2)).toBe(2);
	expect(numberOfStableArrays(1, 2, 1)).toBe(1);
	expect(numberOfStableArrays(3, 3, 2)).toBe(14);
	expect(numberOfStableArrays(2, 2, 1)).toBe(2);
});
