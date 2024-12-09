function maxTwoEvents(events: number[][]): number {
	const times = [];
	for (const [start, end, val] of events) {
		times.push([start, 1, val]);
		times.push([end + 1, 0, val]);
	}

	let ans = 0;
	let max = 0;

	times.sort(([startA, endA], [startB, endB]) => {
		if (startA == startB) {
			return endA - endB;
		}

		return startA - startB;
	});

	for (const timeValue of times) {
		if (timeValue[1]) {
			ans = Math.max(ans, timeValue[2] + max);
		} else {
			max = Math.max(max, timeValue[2]);
		}
	}

	return ans;
}

test('maxTwoEvents', () => {
	expect(
		maxTwoEvents([
			[1, 3, 2],
			[4, 5, 2],
			[2, 4, 3],
		]),
	).toBe(4);
	expect(
		maxTwoEvents([
			[1, 3, 2],
			[4, 5, 2],
			[1, 5, 5],
		]),
	).toBe(5);
	expect(
		maxTwoEvents([
			[1, 5, 3],
			[1, 5, 1],
			[6, 6, 5],
		]),
	).toBe(8);
	expect(
		maxTwoEvents([
			[10, 83, 53],
			[63, 87, 45],
			[97, 100, 32],
			[51, 61, 16],
		]),
	).toBe(85);
});
