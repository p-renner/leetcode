function findMinDifference(timePoints: string[]): number {
	const sorted = timePoints
		.map((point) => Number.parseInt(point.slice(0, 2)) * 60 + Number.parseInt(point.slice(3, 5)))
		.sort((a, b) => a - b);
	sorted.push(sorted[0] + 1440);

	let min = Infinity;

	for (let i = 1; i < sorted.length; i++) {
		min = Math.min(min, sorted[i] - sorted[i - 1]);
	}

	return min;
}

test('findMinDifference', () => {
	expect(findMinDifference(['23:59', '00:00'])).toBe(1);
	expect(findMinDifference(['00:00', '23:59', '00:00'])).toBe(0);
});
