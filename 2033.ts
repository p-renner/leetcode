function minOperations(grid: number[][], x: number): number {
	const sorted = grid.flat().sort((a, b) => a - b);
	const mod = sorted[0] % x;

	if (!sorted.every((num) => num % x == mod)) {
		return -1;
	}

	const median = sorted[Math.floor(sorted.length / 2)];
	return sorted.reduce((acc, curr) => acc + Math.abs((curr - median) / x), 0);
}

test('minOperations', () => {
	expect(
		minOperations(
			[
				[2, 4],
				[6, 8],
			],
			2,
		),
	).toBe(4);
	expect(
		minOperations(
			[
				[1, 5],
				[2, 3],
			],
			1,
		),
	).toBe(5);
	expect(
		minOperations(
			[
				[1, 2],
				[3, 4],
			],
			2,
		),
	).toBe(-1);
});
