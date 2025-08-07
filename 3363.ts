function maxCollectedFruits(fruits: number[][]): number {
	const n = fruits.length;
	let sum = 0;

	for (let i = 0; i < n; i++) {
		sum += fruits[i][i];
	}

	const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
	dp[n - 1][0] = fruits[n - 1][0];
	dp[0][n - 1] = fruits[0][n - 1];
	let div = 1;

	for (let i = 1; i < n - 1; i++) {
		for (let x = 0; x <= div; x++) {
			let j = n - 1 - x;

			if (j == i) {
				break;
			}

			if (j == n - 1) {
				dp[j][i] = fruits[j][i] + Math.max(dp[j][i - 1], dp[j - 1][i - 1]);
				dp[i][j] = fruits[i][j] + Math.max(dp[i - 1][j], dp[i - 1][j - 1]);
			} else {
				dp[j][i] = fruits[j][i] + Math.max(dp[j + 1][i - 1], dp[j][i - 1], dp[j - 1][i - 1]);
				dp[i][j] = fruits[i][j] + Math.max(dp[i - 1][j + 1], dp[i - 1][j], dp[i - 1][j - 1]);
			}
		}
		div++;
	}

	return sum + dp[n - 1][n - 2] + dp[n - 2][n - 1];
}

test('maxCollectedFruits', () => {
	expect(
		maxCollectedFruits([
			[1, 2, 3, 4],
			[5, 6, 8, 7],
			[9, 10, 11, 12],
			[13, 14, 15, 16],
		]),
	).toBe(100);
	expect(
		maxCollectedFruits([
			[1, 1],
			[1, 1],
		]),
	).toBe(4);
});
