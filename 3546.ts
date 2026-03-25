function canPartitionGrid(grid: number[][]): boolean {
	const sum = grid.reduce((acc, row) => acc + row.reduce((a, b) => a + b, 0), 0);

	if (sum % 2 !== 0) {
		return false;
	}

	const target = sum / 2;
	const m = grid.length;
	const n = grid[0].length;

	let rowSum = 0;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			rowSum += grid[i][j];
		}

		if (rowSum > target) {
			break;
		}

		if (rowSum === target) {
			return true;
		}
	}

	let colSum = 0;
	for (let j = 0; j < n; j++) {
		for (let i = 0; i < m; i++) {
			colSum += grid[i][j];
		}

		if (colSum > target) {
			break;
		}

		if (colSum === target) {
			return true;
		}
	}

	return false;
}

describe('canPartitionGrid', () => {
	test('case 1', () => {
		expect(
			canPartitionGrid([
				[1, 4],
				[2, 3],
			]),
		).toBe(true);
	});
	test('case 2', () => {
		expect(
			canPartitionGrid([
				[1, 3],
				[2, 4],
			]),
		).toBe(false);
	});
	test('case 3', () => {
		expect(canPartitionGrid([[14742, 71685, 59237, 27190]])).toBe(true);
	});
});
