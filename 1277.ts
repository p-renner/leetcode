function countSquares(matrix: number[][]): number {
	const dp = Array.from({ length: matrix.length + 1 }, () => Array(matrix[0].length + 1).fill(0));

	return matrix.reduce((acc, curr, i) => {
		return (
			acc +
			curr.reduce((acc2, curr2, j) => {
				if (curr2 === 1) {
					dp[i + 1][j + 1] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1;
					return acc2 + dp[i + 1][j + 1];
				}
				return acc2;
			}, 0)
		);
	}, 0);
}

test('countSquares', () => {
	expect(
		countSquares([
			[0, 1, 1, 1],
			[1, 1, 1, 1],
			[0, 1, 1, 1],
		]),
	).toBe(15);
	expect(
		countSquares([
			[1, 0, 1],
			[1, 1, 0],
			[1, 1, 0],
		]),
	).toBe(7);
});
