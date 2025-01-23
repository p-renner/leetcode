function countServers(grid: number[][]): number {
	const rows: number[] = grid.map((row) => row.reduce((acc, curr) => acc + curr));
	const cols: number[] = grid[0].map((_, i) => grid.reduce((acc, curr) => acc + curr[i], 0));

	let count = 0;

	for (let x = 0; x < grid.length; x++) {
		for (let y = 0; y < grid[0].length; y++) {
			if (grid[x][y] !== 1) {
				continue;
			}

			if (rows[x] <= 1 && cols[y] <= 1) {
				continue;
			}

			count++;
		}
	}

	return count;
}

test('countServers', () => {
	expect(
		countServers([
			[1, 0],
			[0, 1],
		]),
	).toBe(0);
	expect(
		countServers([
			[1, 0],
			[1, 1],
		]),
	).toBe(3);
	expect(
		countServers([
			[1, 1, 0, 0],
			[0, 0, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 1],
		]),
	).toBe(4);
});
