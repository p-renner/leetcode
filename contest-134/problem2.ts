function maximumPoints(enemyEnergies: number[], currentEnergy: number): number {
	enemyEnergies.sort((a, b) => a - b);
	let points = 0;
	let min = enemyEnergies[0];

	if (currentEnergy < enemyEnergies[0]) {
		return 0;
	}

	function gainPoints() {
		const max = Math.floor(currentEnergy / min);
		if (max == 0) return false;
		currentEnergy = currentEnergy % min;
		points += max;
		return true;
	}

	function killEnemy() {
		if (points == 0) return false;
		currentEnergy += enemyEnergies.pop()!;
		return true;
	}

	while (enemyEnergies.length > 0) {
		if (!gainPoints()) {
			killEnemy();
		}
	}

	return points;
}

test('maximumPoints', () => {
	expect(maximumPoints([3, 2, 2], 2)).toBe(3);
	expect(maximumPoints([2], 10)).toBe(5);
	expect(maximumPoints([1, 2, 3], 0)).toBe(0);
});
