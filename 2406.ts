function minGroups(intervals: number[][]): number {
	const map = new Map<number, number>();
	let max = 0;

	for (const interval of intervals) {
		map.set(interval[0], (map.get(interval[0]) || 0) + 1);
		map.set(interval[1] + 1, (map.get(interval[1] + 1) || 0) - 1);
	}

	console.log([...map.entries()].sort((a, b) => a[0] - b[0]));

	let count = 0;
	for (const value of [...map.entries()].sort((a, b) => a[0] - b[0]).map((entry) => entry[1])) {
		count += value;
		max = Math.max(max, count);
	}

	return max;
}

test('minGroups', () => {
	expect(
		minGroups([
			[5, 10],
			[6, 8],
			[1, 5],
			[2, 3],
			[1, 10],
		]),
	).toBe(3);
	expect(
		minGroups([
			[1, 3],
			[5, 6],
			[8, 10],
			[11, 13],
		]),
	).toBe(1);
});
