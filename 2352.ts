function equalPairs(grid: number[][]): number {
	const map = new Map<string, number>();

	for (const row of grid) {
		const index = JSON.stringify(row);
		map.set(index, (map.get(index) || 0) + 1);
	}

	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		const col = JSON.stringify(grid.map((row) => row[i]));
		if (map.has(col)) count += map.get(col)!;
	}

	return count;
}

test('equalPairs', () => {
	expect(
		equalPairs([
			[3, 2, 1],
			[1, 7, 6],
			[2, 7, 7],
		]),
	).toBe(1);
	expect(
		equalPairs([
			[3, 1, 2, 2],
			[1, 4, 4, 5],
			[2, 4, 2, 2],
			[2, 4, 2, 2],
		]),
	).toBe(3);
});
