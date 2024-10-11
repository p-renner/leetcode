function smallestChair(times: number[][], targetFriend: number): number {
	const sorted = times.map(([arrival, leaving], i) => [i, arrival, leaving]).sort((a, b) => a[1] - b[1]);
	const last = [...sorted].reverse().find((time) => time[0] == targetFriend);

	const chairs: Array<[number, number]> = [];

	for (const event of sorted) {
		let found = false;

		for (let i = 0; i < chairs.length; i++) {
			if (event[1] < chairs[i][0]) {
				continue;
			}

			if (event == last) {
				return i;
			}

			chairs[i] = [event[2], event[0]];
			found = true;
			break;
		}

		if (!found) {
			if (event == last) {
				return chairs.length;
			}

			chairs.push([event[2], event[0]]);
		}
	}

	return 0;
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
