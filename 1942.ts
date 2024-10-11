function smallestChair(times: number[][], targetFriend: number): number {
	const last = times[targetFriend];
	const sorted = times.sort((a, b) => a[0] - b[0]).slice(0, times.indexOf(last));
	const chairs = new Array(times.length).fill(0);

	for (const event of sorted) {
		chairs[chairs.findIndex((chair) => chair <= event[0])] = event[1];
	}

	return chairs.findIndex((chair) => chair <= last[0]);
}

test('smallestChair', () => {
	expect(
		smallestChair(
			[
				[1, 4],
				[2, 3],
				[4, 6],
			],
			1,
		),
	).toBe(1);
	expect(
		smallestChair(
			[
				[3, 10],
				[1, 5],
				[2, 6],
			],
			0,
		),
	).toBe(2);
});
