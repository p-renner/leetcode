function numMagicSquaresInside(grid: number[][]): number {
	const permutations = new Set([
		'816357492',
		'294753618',
		'834159672',
		'276951438',
		'438951276',
		'672159834',
		'492357816',
		'618753294',
	]);

	let count = 0;

	for (let row = 0; row < grid.length - 2; row++) {
		for (let col = 0; col < grid[0].length - 2; col++) {
			const square = grid
				.slice(row, row + 3)
				.map((c) => c.slice(col, col + 3))
				.flat()
				.join('');

			if (permutations.has(square)) {
				count++;
			}
		}
	}

	return count;
}

test('numMagicSquaresInside', () => {
	expect(
		numMagicSquaresInside([
			[4, 3, 8, 4],
			[9, 5, 1, 9],
			[2, 7, 6, 2],
		]),
	).toBe(1);
});
