function areSimilar(mat: number[][], k: number): boolean {
	const m = mat.length;
	const n = mat[0].length;

	for (let i = 0; i < m; i++) {
		const mod = k % n;
		const add = i % 2 === 0 ? mod : n - mod;

		for (let j = 0; j < n; j++) {
			if (mat[i][j] != mat[i][(j + add) % n]) {
				return false;
			}
		}
	}

	return true;
}

describe('areSimilar', () => {
	test('case 1', () => {
		expect(
			areSimilar(
				[
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
				4,
			),
		).toBe(false);
	});
	test('case 2', () => {
		expect(
			areSimilar(
				[
					[1, 2, 1, 2],
					[5, 5, 5, 5],
					[6, 3, 6, 3],
				],
				2,
			),
		).toBe(true);
	});
	test('case 3', () => {
		expect(
			areSimilar(
				[
					[2, 2],
					[2, 2],
				],
				3,
			),
		).toBe(true);
	});
});
