function countCoveredBuildings(n: number, buildings: number[][]): number {
	const isBuiltX = Array.from({ length: n + 1 }, () => []);
	const isBuiltY = Array.from({ length: n + 1 }, () => []);

	for (const [x, y] of buildings) {
		isBuiltX[x].push(y);
		isBuiltY[y].push(x);
	}

	isBuiltX.forEach((row) => row.sort((a, b) => a - b));
	isBuiltY.forEach((col) => col.sort((a, b) => a - b));

	let res = 0;
	for (const [x, y] of buildings) {
		const row = isBuiltX[x];
		const col = isBuiltY[y];

		if (row[0] == y || row[row.length - 1] == y || col[0] == x || col[col.length - 1] == x) {
			continue;
		}

		res++;
	}

	return res;
}

describe('countCoveredBuildings', () => {
	test('case 1', () => {
		expect(
			countCoveredBuildings(3, [
				[1, 2],
				[2, 2],
				[3, 2],
				[2, 1],
				[2, 3],
			]),
		).toBe(1);
	});
	test('case 2', () => {
		expect(
			countCoveredBuildings(3, [
				[1, 1],
				[1, 2],
				[2, 1],
				[2, 2],
			]),
		).toBe(0);
	});

	test('case 3', () => {
		expect(
			countCoveredBuildings(5, [
				[1, 3],
				[3, 2],
				[3, 3],
				[3, 5],
				[5, 3],
			]),
		).toBe(1);
	});
});
