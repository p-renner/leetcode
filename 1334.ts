function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
	const matrix: number[][] = Array.from({ length: n }, () => Array(n).fill(Infinity));
	edges.forEach(([from, to, weight]) => {
		matrix[from][to] = weight;
		matrix[to][from] = weight;
	});

	for (let k = 0; k < n; k++) {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
			}
		}
	}

	const dists = matrix.map((row, i) => row.filter((_, j) => i !== j && row[j] <= distanceThreshold).length);
	const min = Math.min(...dists);
	return dists.lastIndexOf(min);
}

test('findTheCity', () => {
	expect(
		findTheCity(
			4,
			[
				[0, 1, 3],
				[1, 2, 1],
				[1, 3, 4],
				[2, 3, 1],
			],
			4,
		),
	).toBe(3);
});
