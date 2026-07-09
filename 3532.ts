function pathExistenceQueries(n: number, nums: number[], maxDiff: number, queries: number[][]): boolean[] {
	const parent: number[] = Array.from({ length: n }, (_, i) => i);

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] - nums[i - 1] <= maxDiff) {
			parent[i] = parent[i - 1];
		}
	}

	return queries.map(([a, b]) => parent[a] == parent[b]);
}

describe('pathExistenceQueries', () => {
	test('case 1', () => {
		expect(
			pathExistenceQueries(2, [1, 3], 1, [
				[0, 0],
				[0, 1],
			]),
		).toEqual([true, false]);
	});
	test('case 2', () => {
		expect(
			pathExistenceQueries(4, [2, 5, 6, 8], 2, [
				[0, 1],
				[0, 2],
				[1, 3],
				[2, 3],
			]),
		).toEqual([false, false, true, true]);
	});
});
