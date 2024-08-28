function countSubIslands(grid1: number[][], grid2: number[][]): number {
	const n = grid1.length;
	const m = grid1[0].length;

	function dfs(i: number, j: number): boolean {
		if (i < 0 || i >= n || j < 0 || j >= m || grid2[i][j] === 0) {
			return true;
		}

		grid2[i][j] = 0;

		let res = grid1[i][j] === 1;

		for (const [x, y] of [
			[0, 1],
			[0, -1],
			[1, 0],
			[-1, 0],
		]) {
			res = dfs(i + x, j + y) && res;
		}
		return res;
	}

	return grid2.reduce((count, row, i) => {
		row.forEach((cell, j) => {
			if (cell === 1) {
				count += dfs(i, j) ? 1 : 0;
			}
		});

		return count;
	}, 0);
}

test('countSubIslands', () => {
	expect(
		countSubIslands(
			[
				[1, 1, 1, 0, 0],
				[0, 1, 1, 1, 1],
				[0, 0, 0, 0, 0],
				[1, 0, 0, 0, 0],
				[1, 1, 0, 1, 1],
			],

			[
				[1, 1, 1, 0, 0],
				[0, 0, 1, 1, 1],
				[0, 1, 0, 0, 0],
				[1, 0, 1, 1, 0],
				[0, 1, 0, 1, 0],
			],
		),
	).toBe(3);
	expect(
		countSubIslands(
			[
				[1, 0, 1, 0, 1],
				[1, 1, 1, 1, 1],
				[0, 0, 0, 0, 0],
				[1, 1, 1, 1, 1],
				[1, 0, 1, 0, 1],
			],
			[
				[0, 0, 0, 0, 0],
				[1, 1, 1, 1, 1],
				[0, 1, 0, 1, 0],
				[0, 1, 0, 1, 0],
				[1, 0, 0, 0, 1],
			],
		),
	).toBe(2);
});
