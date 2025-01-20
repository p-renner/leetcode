function minCost(grid: number[][]): number {
	const dp = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(Infinity));
	dp[0][0] = 0;

	while (true) {
		const prev = JSON.stringify(dp);

		for (let x = 0; x < grid.length; x++) {
			for (let y = 0; y < grid[0].length; y++) {
				if (x > 0) {
					dp[x][y] = Math.min(dp[x][y], dp[x - 1][y] + (grid[x - 1][y] === 3 ? 0 : 1));
				}
				if (y > 0) {
					dp[x][y] = Math.min(dp[x][y], dp[x][y - 1] + (grid[x][y - 1] === 1 ? 0 : 1));
				}
			}
		}

		for (let x = grid.length - 1; x >= 0; x--) {
			for (let y = grid[0].length - 1; y >= 0; y--) {
				if (x < grid.length - 1) {
					dp[x][y] = Math.min(dp[x][y], dp[x + 1][y] + (grid[x + 1][y] === 4 ? 0 : 1));
				}
				if (y < grid[0].length - 1) {
					dp[x][y] = Math.min(dp[x][y], dp[x][y + 1] + (grid[x][y + 1] === 2 ? 0 : 1));
				}
			}
		}

		if (JSON.stringify(dp) === prev) {
			break;
		}
	}

	return dp[grid.length - 1][grid[0].length - 1];
}

test('minCost', () => {
	expect(
		minCost([
			[1, 1, 1, 1],
			[2, 2, 2, 2],
			[1, 1, 1, 1],
			[2, 2, 2, 2],
		]),
	).toBe(3);
	expect(
		minCost([
			[1, 1, 3],
			[3, 2, 2],
			[1, 1, 4],
		]),
	).toBe(0);
	expect(
		minCost([
			[1, 2],
			[4, 3],
		]),
	).toBe(1);
});
