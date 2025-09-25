function minimumTotal(triangle: number[][]): number {
	const minTriangle: number[][] = Array.from({ length: triangle.length }, () => []);
	minTriangle[0][0] = triangle[0][0];

	for (let i = 1; i < triangle.length; i++) {
		for (let j = 0; j < triangle[i].length; j++) {
			let curr = triangle[i][j];
			let min = Infinity;

			if (minTriangle[i - 1][j - 1] != undefined) {
				min = Math.min(curr + minTriangle[i - 1][j - 1], min);
			}

			if (minTriangle[i - 1][j] != undefined) {
				min = Math.min(curr + minTriangle[i - 1][j], min);
			}

			minTriangle[i][j] = min;
		}
	}

	return Math.min(...minTriangle[minTriangle.length - 1]);
}

test('minimumTotal', () => {
	expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11);
	expect(minimumTotal([[-10]])).toBe(-10);
	expect(minimumTotal([[1], [-5, -2], [3, 6, 1], [-1, 2, 4, -3]])).toBe(-3);
});
