function maxFreeTime(eventTime: number, k: number, startTime: number[], endTime: number[]): number {
	const gaps: number[] = [startTime[0]];

	for (let i = 1; i < startTime.length; i++) {
		gaps.push(startTime[i] - endTime[i - 1]);
	}

	gaps.push(eventTime - endTime[endTime.length - 1]);

	let sum = gaps[0];
	for (let i = 1; i <= k; i++) {
		sum += gaps[i];
	}

	let max = sum;

	for (let i = k + 1; i < gaps.length; i++) {
		sum -= gaps[i - k - 1];
		sum += gaps[i];
		max = Math.max(sum, max);
	}

	return max;
}

test('maxFreeTime', () => {
	expect(maxFreeTime(5, 1, [1, 3], [2, 5])).toBe(2);
	expect(maxFreeTime(10, 1, [0, 2, 9], [1, 4, 10])).toBe(6);
	expect(maxFreeTime(5, 2, [0, 1, 2, 3, 4], [1, 2, 3, 4, 5])).toBe(0);
});
