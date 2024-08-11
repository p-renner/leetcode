function minDays(grid: number[][]): number {
	const count = grid.flat().filter((v) => v == 1).length;
	if (count == 1) {
		return 1;
	}

	if (count == 0) {
		return 0;
	}

	if (isDisconnected(grid)) {
		return 0;
	}

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == 0) {
				continue;
			}

			const conn = getConnections(grid, i, j);
			if (conn.length >= 2) {
				const newGrid = structuredClone(grid);
				newGrid[i][j] = 0;

				if (isDisconnected(newGrid)) {
					return 1;
				}
			}
		}
	}

	return 2;
}

function isDisconnected(grid: number[][]): boolean {
	const size = grid.length * grid[0].length;
	const conn: number[] = new Array(size);

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			const index = i * grid[0].length + j;

			if (grid[i][j] == 0) {
				continue;
			}

			let left = index % grid[0].length == 0 ? undefined : conn[index - 1];
			const top = conn[index - grid[0].length];

			if (left == undefined && top == undefined) {
				conn[index] = index;
				continue;
			}

			if (left == undefined) {
				conn[index] = top;
				continue;
			}

			if (top == undefined) {
				conn[index] = left;
				continue;
			}

			const origLeft = findOrig(left);
			const origTop = findOrig(top);

			if (origLeft !== origTop) {
				conn[origLeft] = origTop;
				conn[index] = origTop;
			}

			conn[index] = top;
		}
	}

	function findOrig(i: number): number {
		while (i !== conn[i]) {
			i = conn[i];
		}

		return i;
	}

	return conn.filter((val, i) => val == i).length > 1;
}

function getConnections(grid: number[][], i: number, j: number): number[][] {
	let connections: number[][] = [];
	const dirs = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];

	for (const [x, y] of dirs) {
		if (grid[i + x] && grid[i + x][j + y] == 1) {
			connections.push([i + x, j + y]);
		}
	}

	return connections;
}

test('minDays', () => {
	expect(
		minDays([
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
		]),
	).toBe(2);
	expect(
		minDays([
			[0, 0, 1, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		]),
	).toBe(0);
	expect(minDays([[1, 1]])).toBe(2);
	expect(
		minDays([
			[1, 1, 0, 1, 1],
			[1, 1, 1, 1, 1],
			[1, 1, 0, 1, 1],
			[1, 1, 0, 1, 1],
		]),
	).toBe(1);
	expect(
		minDays([
			[1, 1, 0, 1, 1],
			[1, 1, 1, 1, 1],
			[1, 1, 0, 1, 1],
			[1, 1, 1, 1, 1],
		]),
	).toBe(2);
});
