function numberOfSubmatrices(grid: string[][]): number {
	const subSums = Array.from({ length: grid.length }, () => []);
	const xSums = Array.from({ length: grid.length }, () => []);
	const values = new Map();
	values.set('X', 1);
	values.set('Y', -1);
	values.set('.', 0);

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (j == 0) {
				xSums[i][j] = grid[i][j] == 'X' ? 1 : 0;
				subSums[i][j] = values.get(grid[i][j]);
				continue;
			}

			xSums[i][j] = xSums[i][j - 1] + (grid[i][j] == 'X' ? 1 : 0);
			subSums[i][j] = subSums[i][j - 1] + values.get(grid[i][j]);
		}
	}

	let res = 0;

	for (let j = 0; j < subSums[0].length; j++) {
		let sum = 0;
		let xSum = 0;

		for (let i = 0; i < subSums.length; i++) {
			sum += subSums[i][j];
			xSum += xSums[i][j];

			if (sum == 0 && xSum > 0) {
				res++;
			}
		}
	}

	return res;
}

describe('numberOfSubmatrices', () => {
	test('case 1', () => {
		expect(
			numberOfSubmatrices([
				['X', 'Y', '.'],
				['Y', '.', '.'],
			]),
		).toBe(3);
	});
	test('case 2', () => {
		expect(
			numberOfSubmatrices([
				['X', 'X'],
				['X', 'Y'],
			]),
		).toBe(0);
	});
	test('case 3', () => {
		expect(
			numberOfSubmatrices([
				['.', '.'],
				['.', '.'],
			]),
		).toBe(0);
	});
	test('case 4', () => {
		expect(
			numberOfSubmatrices([
				['.', '.'],
				['Y', 'X'],
			]),
		).toBe(1);
	});
});
