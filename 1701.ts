function averageWaitingTime(customers: number[][]): number {
	let prev = 0;
	let wait = 0;

	for (const [arrival, time] of customers) {
		const start = Math.max(arrival, prev);
		prev = start + time;
		wait += prev - arrival;
	}

	return wait / customers.length;
}

test('averageWaitingTime', () => {
	expect(
		averageWaitingTime([
			[1, 2],
			[2, 5],
			[4, 3],
		]),
	).toBe(5);
});
