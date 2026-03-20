function minAbsDiff(grid: number[][], k: number): number[][] {
	const res = Array.from({ length: grid.length - k + 1 }, () => []);

	for (let i = 0; i < grid.length - k + 1; i++) {
		for (let j = 0; j < grid[0].length - k + 1; j++) {
			const set = new Set<number>();

			for (let x = i; x < i + k; x++) {
				for (let y = j; y < j + k; y++) {
					set.add(grid[x][y]);
				}
			}

			if (set.size == 1) {
				res[i][j] = 0;
				continue;
			}

			const sorted = [...set].sort((a, b) => a - b);

			let min = Infinity;
			for (let i = 1; i < sorted.length; i++) {
				min = Math.min(min, sorted[i] - sorted[i - 1]);
			}

			res[i][j] = min;
		}
	}

	return res;
}

describe('minAbsDiff', () => {
	test('case 1', () => {
		expect(
			minAbsDiff(
				[
					[1, 8],
					[3, -2],
				],
				2,
			),
		).toEqual([[2]]);
	});
	test('case 2', () => {
		expect(minAbsDiff([[3, -1]], 1)).toEqual([[0, 0]]);
	});
	test('case 3', () => {
		expect(
			minAbsDiff(
				[
					[1, -2, 3],
					[2, 3, 5],
				],
				2,
			),
		).toEqual([[1, 2]]);
	});
});
