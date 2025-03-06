function maximumSafenessFactor(grid: number[][]): number {
	const n = grid.length;

	if (grid[0][0] == 1 || grid[n - 1][n - 1] == 1) {
		return 0;
	}

	const manhattanDistances = manhattan(grid);

	let low = 0;
	let high = Math.max(...manhattanDistances.map((row) => Math.max(...row)));

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);

		if (mid === 0 || hasPath(manhattanDistances, mid)) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return high;
}

function hasPath(grid: number[][], v: number): boolean {
	if (grid.length == 1) {
		return true;
	}

	const n = grid.length;

	if (grid[0][0] < v || grid[n - 1][n - 1] < v) {
		return false;
	}

	const queue: [number, number][] = [[0, 0]];
	const visited = Array.from({ length: n }, () => Array(n).fill(false));
	visited[0][0] = true;

	const dirs = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];

	while (queue.length > 0) {
		const [x, y] = queue.pop();

		for (const [dx, dy] of dirs) {
			const currX = x + dx;
			const currY = y + dy;

			if (
				currX < 0 ||
				currX >= n ||
				currY < 0 ||
				currY >= n ||
				grid[currX][currY] < v ||
				visited[currX][currY] === true
			) {
				continue;
			}

			if (currX == n - 1 && currY == n - 1) {
				return true;
			}

			queue.push([currX, currY]);
			visited[currX][currY] = true;
		}
	}

	return false;
}

function manhattan(grid: number[][]): number[][] {
	const n = grid.length;
	const res = Array.from({ length: n }, () => new Array(n).fill(-1));
	const queue: [number, number][] = [];

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] == 1) {
				queue.push([i, j]);
			}
		}
	}

	for (const [x, y] of queue) {
		res[x][y] = 0;
	}

	const dirs = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];

	while (queue.length > 0) {
		const [x, y] = queue.shift();
		const dist = res[x][y];

		for (const [dx, dy] of dirs) {
			const currX = x + dx;
			const currY = y + dy;

			if (currX < 0 || currX >= n || currY < 0 || currY >= n || res[currX][currY] !== -1) {
				continue;
			}

			res[currX][currY] = dist + 1;
			queue.push([currX, currY]);
		}
	}

	return res;
}

test('maximumSafenessFactor', () => {
	expect(
		maximumSafenessFactor([
			[1, 0, 0],
			[0, 0, 0],
			[0, 0, 1],
		]),
	).toBe(0);
	expect(
		maximumSafenessFactor([
			[0, 0, 1],
			[0, 0, 0],
			[0, 0, 0],
		]),
	).toBe(2);
	expect(
		maximumSafenessFactor([
			[0, 0, 0, 1],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 0, 0, 0],
		]),
	).toBe(2);
	expect(maximumSafenessFactor([[1]])).toBe(0);
	expect(
		maximumSafenessFactor([
			[0, 0, 1],
			[0, 1, 1],
			[1, 1, 1],
		]),
	).toBe(0);
	expect(
		maximumSafenessFactor([
			[0, 0, 1],
			[0, 1, 1],
			[0, 0, 0],
		]),
	).toBe(1);
	expect(
		maximumSafenessFactor([
			[0, 0, 1],
			[0, 1, 0],
			[1, 0, 0],
		]),
	).toBe(0);
});
