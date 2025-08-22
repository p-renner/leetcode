function minimumArea(grid: number[][]): number {
	let minX = Infinity,
		minY = Infinity,
		maxX = -Infinity,
		maxY = -Infinity;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) {
				minX = Math.min(minX, i);
				minY = Math.min(minY, j);
				maxX = Math.max(maxX, i);
				maxY = Math.max(maxY, j);
			}
		}
	}

	if (minX === Infinity) {
		return 0;
	}

	return (maxX - minX + 1) * (maxY - minY + 1);
}

test('minimumArea', () => {
	expect(
		minimumArea([
			[0, 1, 0],
			[1, 0, 1],
		]),
	).toBe(6);
	expect(
		minimumArea([
			[1, 0],
			[0, 0],
		]),
	).toBe(1);
	expect(
		minimumArea([
			[0, 0],
			[0, 0],
		]),
	).toBe(0);
});
