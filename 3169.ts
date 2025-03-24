function countDays(days: number, meetings: number[][]): number {
	let count = 0;
	let maxEnd = 0;

	meetings.sort((a, b) => a[0] - b[0]);

	for (const [start, end] of meetings) {
		if (start > maxEnd + 1) {
			count += start - maxEnd - 1;
		}

		maxEnd = Math.max(maxEnd, end);
	}

	count += days - maxEnd;

	return count;
}

test('countDays', () => {
	expect(
		countDays(10, [
			[5, 7],
			[1, 3],
			[9, 10],
		]),
	).toBe(2);
	expect(
		countDays(5, [
			[2, 4],
			[1, 3],
		]),
	).toBe(1);
	expect(countDays(6, [[1, 6]])).toBe(0);
});
