function sortMatrix(grid: number[][]): number[][] {
	const n = grid.length;

	for (let i = 0; i < n; i++) {
		let [x, y] = [i, 0];
		const row: number[] = [];
		const indices: number[][] = [];

		for (let j = 0; j < n; j++) {
			if (x >= n || y >= n) {
				break;
			}

			row.push(grid[x][y]);
			indices.push([x, y]);

			x++;
			y++;
		}

		row.sort((a, b) => b - a);

		indices.forEach(([x, y], j) => (grid[x][y] = row[j]));
	}

	for (let i = 1; i < n; i++) {
		let [x, y] = [0, i];

		const row: number[] = [];
		const indices: number[][] = [];

		for (let j = 0; j < n; j++) {
			if (x >= n || y >= n) {
				break;
			}

			row.push(grid[x][y]);
			indices.push([x, y]);

			x++;
			y++;
		}

		row.sort((a, b) => a - b);

		indices.forEach(([x, y], j) => (grid[x][y] = row[j]));
	}

	return grid;
}

test('sortMatrix', () => {
	expect(
		sortMatrix([
			[1, 7, 3],
			[9, 8, 2],
			[4, 5, 6],
		]),
	).toStrictEqual([
		[8, 2, 3],
		[9, 6, 7],
		[4, 5, 1],
	]);
});
