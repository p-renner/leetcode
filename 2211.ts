function countCollisions(directions: string): number {
	let lefts = 0,
		rights = 0,
		stationary = 0;

	let i = 0;

	while (directions[i] == 'L') {
		lefts++;
		i++;
	}

	i = directions.length - 1;

	while (directions[i] == 'R') {
		rights++;
		i--;
	}

	for (const c of directions) {
		if (c == 'S') {
			stationary++;
		}
	}

	return directions.length - (lefts + rights + stationary);
}

describe('countCollisions', () => {
	test('case 1', () => {
		expect(countCollisions('RLRSLL')).toBe(5);
	});

	test('case 2', () => {
		expect(countCollisions('LLRR')).toBe(0);
	});
});
