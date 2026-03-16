function getBiggestThree(grid: number[][]): number[] {
	const maxSize = Math.min(grid.length - 2, grid[0].length - 2);
	const sums = new Set<number>();

	for (let i = 0; i <= Math.max(maxSize, 0); i++) {
		getAllForSize(i);
	}

	function getAllForSize(size: number): void {
		for (let i = size; i < grid.length - size; i++) {
			for (let j = 0; j < grid[0].length - size; j++) {
				if (size == 0) {
					sums.add(grid[i][j]);
					continue;
				}

				const endPos = [i, j + 2 * size];
				if (endPos[1] >= grid[0].length) {
					continue;
				}

				const positions: number[] = [grid[i][j], grid[endPos[0]][endPos[1]]];

				for (let k = 1; k < size; k++) {
					positions.push(grid[i + k][j + k], grid[i - k][j + k]);
					positions.push(grid[endPos[0] + k][endPos[1] - k], grid[endPos[0] - k][endPos[1] - k]);
				}

				positions.push(grid[i + size][j + size], grid[i - size][j + size]);

				const sum = positions.reduce((acc, curr) => acc + curr, 0);
				sums.add(sum);
			}
		}
	}

	return [...sums].sort((a, b) => b - a).slice(0, 3);
}

describe('getBiggestThree', () => {
	test('case 1', () => {
		expect(
			getBiggestThree([
				[3, 4, 5, 1, 3],
				[3, 3, 4, 2, 3],
				[20, 30, 200, 40, 10],
				[1, 5, 5, 4, 1],
				[4, 3, 2, 2, 5],
			]),
		).toEqual([228, 216, 211]);
	});
	test('case 2', () => {
		expect(
			getBiggestThree([
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
			]),
		).toEqual([20, 9, 8]);
	});
	test('case 3', () => {
		expect(getBiggestThree([[7, 7, 7]])).toEqual([7]);
	});
	test('case 4', () => {
		expect(
			getBiggestThree([
				[20, 17, 9, 13, 5, 2, 9, 1, 5],
				[14, 9, 9, 9, 16, 18, 3, 4, 12],
				[18, 15, 10, 20, 19, 20, 15, 12, 11],
				[19, 16, 19, 18, 8, 13, 15, 14, 11],
				[4, 19, 5, 2, 19, 17, 7, 2, 2],
			]),
		).toEqual([107, 103, 102]);
	});
});
