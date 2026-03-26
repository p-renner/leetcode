function canPartitionGrid(grid: number[][]): boolean {
	const m = grid.length;
	const n = grid[0].length;
	const sum = grid.reduce((acc, row) => acc + row.reduce((a, b) => a + b, 0), 0);

	const allFreq = new Map<number, number>();
	for (const row of grid) {
		for (const v of row) {
			allFreq.set(v, (allFreq.get(v) ?? 0) + 1);
		}
	}

	function canDeleteFromTop(val: number, i: number, topFreq: Map<number, number>): boolean {
		if (i > 0 && n > 1) {
			return (topFreq.get(val) ?? 0) > 0;
		}

		if (i === 0) {
			return val === grid[0][0] || val === grid[0][n - 1];
		}

		return val === grid[0][0] || val === grid[i][0];
	}

	function canDeleteFromBottom(val: number, i: number, topFreq: Map<number, number>): boolean {
		const botFreq = (v: number) => (allFreq.get(v) ?? 0) - (topFreq.get(v) ?? 0);
		if (i < m - 2 && n > 1) {
			return botFreq(val) > 0;
		}

		if (i === m - 2) {
			return val === grid[m - 1][0] || val === grid[m - 1][n - 1];
		}

		return val === grid[i + 1][0] || val === grid[m - 1][0];
	}

	function canDeleteFromLeft(val: number, j: number, leftFreq: Map<number, number>): boolean {
		if (j > 0 && m > 1) {
			return (leftFreq.get(val) ?? 0) > 0;
		}

		if (j === 0) {
			return val === grid[0][0] || val === grid[m - 1][0];
		}

		return val === grid[0][0] || val === grid[0][j];
	}

	function canDeleteFromRight(val: number, j: number, leftFreq: Map<number, number>): boolean {
		const rightFreq = (v: number) => (allFreq.get(v) ?? 0) - (leftFreq.get(v) ?? 0);
		if (j < n - 2 && m > 1) {
			return rightFreq(val) > 0;
		}

		if (j === n - 2) {
			return val === grid[0][n - 1] || val === grid[m - 1][n - 1];
		}

		return val === grid[0][j + 1] || val === grid[0][n - 1];
	}

	const topFreq = new Map<number, number>();
	let top = 0;

	for (let i = 0; i < m - 1; i++) {
		for (const v of grid[i]) {
			top += v;
			topFreq.set(v, (topFreq.get(v) ?? 0) + 1);
		}

		const diff = top - (sum - top);
		if (diff === 0) {
			return true;
		}

		if (diff > 0 && canDeleteFromTop(diff, i, topFreq)) {
			return true;
		}

		if (diff < 0 && canDeleteFromBottom(-diff, i, topFreq)) {
			return true;
		}
	}

	const leftFreq = new Map<number, number>();
	let left = 0;

	for (let j = 0; j < n - 1; j++) {
		for (let i = 0; i < m; i++) {
			left += grid[i][j];
			leftFreq.set(grid[i][j], (leftFreq.get(grid[i][j]) ?? 0) + 1);
		}

		const diff = left - (sum - left);

		if (diff === 0) {
			return true;
		}

		if (diff > 0 && canDeleteFromLeft(diff, j, leftFreq)) {
			return true;
		}

		if (diff < 0 && canDeleteFromRight(-diff, j, leftFreq)) {
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
				[1, 2],
				[3, 4],
			]),
		).toBe(true);
	});
	test('case 3', () => {
		expect(
			canPartitionGrid([
				[1, 2, 4],
				[2, 3, 5],
			]),
		).toBe(false);
	});
	test('case 4', () => {
		expect(
			canPartitionGrid([
				[4, 1, 8],
				[3, 2, 6],
			]),
		).toBe(false);
	});
});
