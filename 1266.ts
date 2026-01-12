function minTimeToVisitAllPoints(points: number[][]): number {
	let res = 0;
	let prev = points[0];

	for (let i = 1; i < points.length; i++) {
		const next = points[i];

		res += Math.max(Math.abs(next[0] - prev[0]), Math.abs(next[1] - prev[1]));
		prev = next;
	}

	return res;
}

describe('minTimeToVisitAllPoints', () => {
	test('case 1', () => {
		expect(
			minTimeToVisitAllPoints([
				[1, 1],
				[3, 4],
				[-1, 0],
			]),
		).toBe(7);
	});

	test('case 2', () => {
		expect(
			minTimeToVisitAllPoints([
				[3, 2],
				[-2, 2],
			]),
		).toBe(5);
	});
});
