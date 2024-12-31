function mincostTickets(days: number[], costs: number[]): number {
	const travelDays = new Set(days);
	const memo = new Map<number, number>();

	function travel(day: number): number {
		if (memo.has(day)) {
			return memo.get(day);
		}

		if (day > days[days.length - 1]) {
			return 0;
		}

		if (!travelDays.has(day)) {
			return travel(day + 1);
		}

		const min = Math.min(costs[2] + travel(day + 30), costs[1] + travel(day + 7), costs[0] + travel(day + 1));
		memo.set(day, min);

		return min;
	}

	return travel(1);
}

test('mincostTickets', () => {
	expect(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15])).toBe(11);
	expect(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15])).toBe(17);
});
