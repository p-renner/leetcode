function gridGame(grid: number[][]): number {
	let sum0 = grid[0].reduce((acc, val) => acc + val, 0);
	let sum1 = 0;
	let min = Infinity;

	for (let i = 0; i < grid[0].length; i++) {
		sum0 -= grid[0][i];
		min = Math.min(min, Math.max(sum0, sum1));
		sum1 += grid[1][i];
	}

	return min;
}

test('gridGame', () => {
	expect(
		gridGame([
			[2, 5, 4],
			[1, 5, 1],
		]),
	).toBe(4);
	expect(
		gridGame([
			[3, 3, 1],
			[8, 5, 2],
		]),
	).toBe(4);
	expect(
		gridGame([
			[1, 3, 1, 15],
			[1, 3, 3, 1],
		]),
	).toBe(7);
});
