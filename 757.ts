function intersectionSizeTwo(intervals: number[][]): number {
	if (intervals.length === 0) {
		return 0;
	}

	intervals.sort((a, b) => {
		if (a[1] !== b[1]) {
			return a[1] - b[1];
		}

		return b[0] - a[0];
	});

	let min = -Infinity;
	let max = -Infinity;
	let size = 0;

	for (let i = 0; i < intervals.length; i++) {
		const [start, end] = intervals[i];

		if (start > max) {
			size += 2;
			min = end - 1;
			max = end;
		} else if (start > min) {
			size += 1;
			min = max;
			max = end;
		}
	}
	return size;
}

test('intersectionSizeTwo', () => {
	expect(
		intersectionSizeTwo([
			[1, 3],
			[3, 7],
			[8, 9],
		]),
	).toBe(5);
	expect(
		intersectionSizeTwo([
			[1, 3],
			[1, 4],
			[2, 5],
			[3, 5],
		]),
	).toBe(3);
	expect(
		intersectionSizeTwo([
			[1, 2],
			[2, 3],
			[2, 4],
			[4, 5],
		]),
	).toBe(5);
});
