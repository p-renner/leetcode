function regionsBySlashes(grid: string[]): number {
	const gridSize = grid.length * grid[0].length;

	let edges: [number, number][] = [];

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			const char = grid[i][j];
			const index = (i * grid.length + j) * 2;

			if (j != grid[i].length - 1) {
				edges.push([index + 1, index + 2]);
			}

			if (i == grid.length - 1) {
				if (char == ' ') {
					edges.push([index, index + 1]);
				}
				continue;
			}

			const bottom = (grid[i + 1][j] == '\\' ? 1 : 0) + index + grid[0].length * 2;

			if (char == '\\') {
				edges.push([index, bottom]);
				continue;
			}

			if (char == '/') {
				edges.push([index + 1, bottom]);
				continue;
			}

			edges.push([index, index + 1]);
			edges.push([index + 1, bottom]);
		}
	}

	let count = 0;
	const seen = new Set();

	while (edges.length > 0) {
		count++;

		const queue: number[] = edges.shift()!;

		while (queue.length > 0) {
			const curr = queue.shift()!;
			seen.add(curr);

			edges
				.filter((edge) => edge[0] == curr || edge[1] == curr)
				.forEach((edge) => (edge[0] == curr ? queue.push(edge[1]) : queue.push(edge[0])));
			edges = edges.filter((edge) => edge[0] != curr && edge[1] != curr);
		}
	}

	return count + (gridSize * 2 - seen.size);
}

test('regionsBySlashes', () => {
	expect(regionsBySlashes([' /', '/ '])).toBe(2);
	expect(regionsBySlashes([' /', '  '])).toBe(1);
	expect(regionsBySlashes(['/\\', '\\/'])).toBe(5);
	expect(regionsBySlashes([' /\\', ' \\/', '\\  '])).toBe(4);
});
