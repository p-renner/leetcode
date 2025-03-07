function largestLocal(grid: number[][]): number[][] {
	const result = Array.from({ length: grid.length - 2 }, () => Array(grid.length - 2).fill(0));

	for (let i = 0; i < grid.length - 2; i++) {
		for (let j = 0; j < grid.length - 2; j++) {
			result[i][j] = checkLocalMax(grid, i, j);
		}
	}

	return result;
}

function checkLocalMax(grid: number[][], i: number, j: number): number {
	let max = 0;
	for (let x = i; x < i + 3; x++) {
		for (let y = j; y < j + 3; y++) {
			max = Math.max(max, grid[x][y]);
		}
	}
	return max;
}

test('largestLocal', () => {
	expect(
		largestLocal([
			[9, 9, 8, 1],
			[5, 6, 2, 6],
			[8, 2, 6, 4],
			[6, 2, 2, 2],
		]),
	).toStrictEqual([
		[9, 9],
		[8, 6],
	]);
});
