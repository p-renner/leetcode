function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
	const grid = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));

	for (const [i, j] of walls) {
		grid[i][j] = 1;
	}

	for (const [i, j] of guards) {
		grid[i][j] = 2;
	}

	const directions = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];

	for (const [i, j] of guards) {
		for (const [di, dj] of directions) {
			let x = i + di;
			let y = j + dj;

			while (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] !== 1 && grid[x][y] !== 2) {
				grid[x][y] = 3;
				x += di;
				y += dj;
			}
		}
	}

	let count = 0;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 0) {
				count++;
			}
		}
	}

	return count;
}

test('countUnguarded', () => {
	expect(
		countUnguarded(
			4,
			6,
			[
				[0, 0],
				[1, 1],
				[2, 3],
			],
			[
				[0, 1],
				[2, 2],
				[1, 4],
			],
		),
	).toBe(7);
	expect(
		countUnguarded(
			3,
			3,
			[[1, 1]],
			[
				[0, 1],
				[1, 0],
				[2, 1],
				[1, 2],
			],
		),
	).toBe(4);
});
