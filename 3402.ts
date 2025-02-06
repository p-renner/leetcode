function minimumOperations(grid: number[][]): number {
	let res = 0;

	for (let i = 0; i < grid[0].length; i++) {
		let prev = grid[0][i];

		for (let j = 1; j < grid.length; j++) {
			if (prev < grid[j][i]) {
				prev = grid[j][i];
				continue;
			}

			res += prev - grid[j][i] + 1;
			prev++;
		}
	}

	return res;
}

test('minimumOperations', () => {
	expect(
		minimumOperations([
			[3, 2],
			[1, 3],
			[3, 4],
			[0, 1],
		]),
	).toBe(15);
});
