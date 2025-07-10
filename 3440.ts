function maxFreeTime(eventTime: number, startTime: number[], endTime: number[]): number {
	const gaps: number[] = [startTime[0]];

	for (let i = 1; i < startTime.length; i++) {
		gaps.push(startTime[i] - endTime[i - 1]);
	}

	gaps.push(eventTime - endTime[endTime.length - 1]);
	let sortedGaps = gaps.map((gap, i) => [gap, i]).sort((a, b) => b[0] - a[0]);

	let max = 0;

	for (let i = 0; i < gaps.length - 1; i++) {
		const len = endTime[i] - startTime[i];

		if (hasSpace(len, i)) {
			max = Math.max(max, gaps[i] + gaps[i + 1] + len);
		} else {
			max = Math.max(max, gaps[i] + gaps[i + 1]);
		}
	}

	return max;

	function hasSpace(len: number, curr: number): boolean {
		let i = 0;

		while (sortedGaps[i][1] == curr || sortedGaps[i][1] == curr + 1) {
			i++;
		}

		return sortedGaps[i][0] >= len;
	}
}

test('maxFreeTime', () => {
	expect(maxFreeTime(5, [1, 3], [2, 5])).toBe(2);
	expect(maxFreeTime(10, [0, 7, 9], [1, 8, 10])).toBe(7);
	expect(maxFreeTime(5, [0, 1, 2, 3, 4], [1, 2, 3, 4, 5])).toBe(0);
});
