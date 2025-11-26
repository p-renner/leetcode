function numberOfPaths(grid: number[][], k: number): number {
	const MOD = 1000000007;
	const n = grid.length;
	const m = grid[0].length;
	const dp: number[][][] = Array.from({ length: n }, () => Array.from({ length: m }, () => new Array(k).fill(0)));
	const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
	dp[0][0][grid[0][0] % k] = 1;

	let queue = [[0, 0]];

	while (queue.length > 0) {
		const [x, y] = queue.shift();

		if (visited[x][y]) {
			continue;
		}

		visited[x][y] = true;
		const curr = grid[x][y];

		for (let j = 0; j < k; j++) {
			let value = (j + curr) % k;

			if (dp[x - 1] && dp[x - 1][y]) {
				dp[x][y][value] = (dp[x][y][value] + dp[x - 1][y][j]) % MOD;
			}

			if (dp[x][y - 1]) {
				dp[x][y][value] = (dp[x][y][value] + dp[x][y - 1][j]) % MOD;
			}
		}

		if (dp[x][y].length == 0) {
			dp[x][y].push(curr % k);
		}

		if (x < n - 1) {
			queue.push([x + 1, y]);
		}

		if (y < m - 1) {
			queue.push([x, y + 1]);
		}
	}

	return dp[n - 1][m - 1][0];
}

test('numberOfPaths', () => {
	expect(
		numberOfPaths(
			[
				[5, 2, 4],
				[3, 0, 5],
				[0, 7, 2],
			],
			3,
		),
	).toBe(2);
});
