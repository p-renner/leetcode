function findMaxFish(grid: number[][]): number {
	const dirs = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	const visited = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(false));

	function dfs(x: number, y: number): number {
		let queue = [[x, y]];
		let curr = 0;

		while (queue.length > 0) {
			const [x, y] = queue.pop()!;

			if (visited[x][y]) {
				continue;
			}

			if (grid[x][y] == 0) {
				visited[x][y] = true;
				continue;
			}

			visited[x][y] = true;
			curr += grid[x][y];

			for (const dir of dirs) {
				const dx = x + dir[0];
				const dy = y + dir[1];

				if (dx >= 0 && dx < grid.length && dy >= 0 && dy < grid[0].length && !visited[dx][dy]) {
					queue.push([dx, dy]);
				}
			}
		}

		return curr;
	}

	let max = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (visited[i][j]) {
				continue;
			}

			max = Math.max(max, dfs(i, j));
		}
	}

	return max;
}

test('findMaxFish', () => {
	expect(
		findMaxFish([
			[0, 2, 1, 0],
			[4, 0, 0, 3],
			[1, 0, 0, 4],
			[0, 3, 2, 0],
		]),
	).toBe(7);
	expect(
		findMaxFish([
			[1, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 1],
		]),
	).toBe(1);
});
