function numberOfPairs(points: number[][]): number {
	let res = 0;

	for (let i = 0; i < points.length; i++) {
		for (let j = 0; j < points.length; j++) {
			if (i == j) {
				continue;
			}

			const [x1, y1] = points[i];
			const [x2, y2] = points[j];

			if (x1 > x2 || y1 < y2) {
				continue;
			}

			if (!hasPointBetween(i, j)) {
				res++;
			}
		}
	}

	function hasPointBetween(index1: number, index2: number): boolean {
		for (let i = 0; i < points.length; i++) {
			if (i == index1 || i == index2) {
				continue;
			}

			const [x, y] = points[i];
			const [x1, y1] = points[index1];
			const [x2, y2] = points[index2];

			if (x1 <= x && x <= x2 && y2 <= y && y <= y1) {
				return true;
			}
		}

		return false;
	}

	return res;
}

test('numberOfPairs', () => {
	expect(
		numberOfPairs([
			[1, 1],
			[2, 2],
			[3, 3],
		]),
	).toBe(0);
	expect(
		numberOfPairs([
			[6, 2],
			[4, 4],
			[2, 6],
		]),
	).toBe(2);
	expect(
		numberOfPairs([
			[3, 1],
			[1, 3],
			[1, 1],
		]),
	).toBe(2);
});
