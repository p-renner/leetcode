function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
	trainers.sort((a, b) => a - b);
	players.sort((a, b) => a - b);

	let res = 0;

	for (const trainer of trainers) {
		if (res >= players.length) {
			break;
		}

		if (players[res] > trainer) {
			continue;
		}

		res++;
	}

	return res;
}

test('matchPlayersAndTrainers', () => {
	expect(matchPlayersAndTrainers([4, 7, 9], [8, 2, 5, 8])).toBe(2);
	expect(matchPlayersAndTrainers([1, 1, 1], [10])).toBe(1);
});
