function findMissingAndRepeatedValues(grid: number[][]): number[] {
	const n = grid.length;
	const set = new Set<number>(Array.from({ length: n * n }, (_, i) => i + 1));
	const res: number[] = [];

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (!set.has(grid[i][j])) {
				res[0] = grid[i][j];
				continue;
			}

			set.delete(grid[i][j]);
		}
	}

	res[1] = set.values().next().value;

	return res;
}
