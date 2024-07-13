interface Robot {
	index: number;
	position: number;
	health: number;
	direction: 'L' | 'R';
}

function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
	const robots: Robot[] = positions
		.map((pos, i) => {
			return { index: i, position: pos, health: healths[i], direction: directions[i] as 'L' | 'R' };
		})
		.sort((a, b) => a.position - b.position);

	const stack: Robot[] = [];
	let [curr, top] = [0, -1];

	while (curr < robots.length) {
		let fighter = robots[curr];
		top = stack.length - 1;

		if (stack.length == 0 || fighter.direction == 'R' || stack[top].direction == 'L') {
			stack.push(fighter);
			curr++;
			continue;
		}

		if (fighter.health > stack[top].health) {
			stack.pop();
			fighter.health--;
			continue;
		}

		if (fighter.health == stack[top].health) {
			stack.pop();
			curr++;
			continue;
		}
		stack[top].health--;
		curr++;
	}

	stack.sort((a, b) => a.index - b.index);
	return robots.length > 0 ? stack.map((r) => r.health) : [];
}

test('survivedRobotsHealths', () => {
	expect(survivedRobotsHealths([5, 4, 3, 2, 1], [2, 17, 9, 15, 10], 'RRRRR')).toStrictEqual([2, 17, 9, 15, 10]);
	expect(survivedRobotsHealths([3, 5, 2, 6], [10, 10, 15, 12], 'RLRL')).toStrictEqual([14]);
	expect(survivedRobotsHealths([1, 2, 5, 6], [10, 10, 11, 11], 'RLRL')).toStrictEqual([]);
	expect(survivedRobotsHealths([1], [40], 'R')).toStrictEqual([40]);
	expect(survivedRobotsHealths([11, 44, 16], [1, 20, 17], 'RLR')).toStrictEqual([18]);
});
