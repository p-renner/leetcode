// There is a player with highest skills. If this player is reached, we are
// done. So we only need one pass through the queue.
function findWinningPlayer(skills: number[], k: number): number {
	let currentIndex = 0;
	let wins = 0;

	for (let i = 1; i < skills.length; i++) {
		if (skills[currentIndex] > skills[i]) {
			wins += 1;
		} else {
			currentIndex = i;
			wins = 1;
		}

		if (wins == k) {
			return currentIndex;
		}
	}

	return currentIndex;
}

test('findWinningPlayer', () => {
	expect(findWinningPlayer([4, 2, 6, 3, 9], 2)).toBe(2);
	expect(findWinningPlayer([2, 5, 4], 3)).toBe(1);
	expect(findWinningPlayer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)).toBe(9);
	expect(findWinningPlayer([4, 18, 17, 20, 15, 12, 8, 5], 1)).toBe(1);
});
