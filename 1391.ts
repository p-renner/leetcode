function hasValidPath(grid: number[][]): boolean {
	//dfs until we reach the end or we have no more paths to explore
	const m = grid.length;
	const n = grid[0].length;

	const visited = new Set<string>();
	const dfs = (i: number, j: number): boolean => {
		if (i === m - 1 && j === n - 1) return true;
		visited.add(`${i},${j}`);
		const type = grid[i][j];
		const directions = getDirections(type);
		for (const [di, dj] of directions) {
			const ni = i + di;
			const nj = j + dj;
			if (ni >= 0 && ni < m && nj >= 0 && nj < n && !visited.has(`${ni},${nj}`)) {
				const connects = getDirections(grid[ni][nj]).some(([d, e]) => d === -di && e === -dj);
				if (connects && dfs(ni, nj)) return true;
			}
		}
		return false;
	};

	const getDirections = (type: number): number[][] => {
		switch (type) {
			case 1:
				return [
					[0, 1],
					[0, -1],
				];
			case 2:
				return [
					[1, 0],
					[-1, 0],
				];
			case 3:
				return [
					[0, -1],
					[1, 0],
				];
			case 4:
				return [
					[0, 1],
					[1, 0],
				];
			case 5:
				return [
					[0, -1],
					[-1, 0],
				];
			case 6:
				return [
					[0, 1],
					[-1, 0],
				];
			default:
				return [];
		}
	};

	return dfs(0, 0);
}

describe('hasValidPath', () => {
	test('case 1', () => {
		expect(
			hasValidPath([
				[2, 4, 3],
				[6, 5, 2],
			]),
		).toBe(true);
	});
	test('case 2', () => {
		expect(
			hasValidPath([
				[1, 2, 1],
				[1, 2, 1],
			]),
		).toBe(false);
	});
	test('case 3', () => {
		expect(hasValidPath([[1, 1, 2]])).toBe(false);
	});
});
