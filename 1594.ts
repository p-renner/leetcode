function maxProductPath(grid: number[][]): number {
	const maxSum = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0));
	const minSum = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0));
	maxSum[0][0] = grid[0][0];
	minSum[0][0] = grid[0][0];

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (i == 0 && j == 0) {
				continue;
			}

			const candidates = [];

			if (i > 0) {
				candidates.push(maxSum[i - 1][j] * grid[i][j]);
				candidates.push(minSum[i - 1][j] * grid[i][j]);
			}

			if (j > 0) {
				candidates.push(maxSum[i][j - 1] * grid[i][j]);
				candidates.push(minSum[i][j - 1] * grid[i][j]);
			}

			maxSum[i][j] = Math.max(...candidates);
			minSum[i][j] = Math.min(...candidates);
		}
	}

	if (maxSum[grid.length - 1][grid[0].length - 1] < 0) {
		return -1;
	}

	if (maxSum[grid.length - 1][grid[0].length - 1] == -0) {
		return 0;
	}

	return maxSum[grid.length - 1][grid[0].length - 1] % (10 ** 9 + 7);
}

describe('maxProductPath', () => {
	test('case 1', () => {
		expect(
			maxProductPath([
				[-1, -2, -3],
				[-2, -3, -3],
				[-3, -3, -2],
			]),
		).toBe(-1);
	});
	test('case 2', () => {
		expect(
			maxProductPath([
				[1, -2, 1],
				[1, -2, 1],
				[3, -4, 1],
			]),
		).toBe(8);
	});
	test('case 3', () => {
		expect(
			maxProductPath([
				[1, 3],
				[0, -4],
			]),
		).toBe(0);
	});
});
