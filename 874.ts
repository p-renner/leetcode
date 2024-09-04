function robotSim(commands: number[], obstacles: number[][]): number {
	const hash = new Set(obstacles.map(([x, y]) => `${x},${y}`));
	const dirs = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];
	let dir = 0;
	let pos = [0, 0];
	let maxpos = 0;
	let hit = false;

	for (let i = 0; i < commands.length; i++) {
		const command = commands[i];

		if (command === -1) {
			dir = (dir + 1) % 4;
		} else if (command === -2) {
			dir = (dir + 3) % 4;
		} else {
			if (hit && command[i - 1] > 0) {
				hit = false;
				continue;
			}

			for (let i = 0; i < command; i++) {
				const [dx, dy] = dirs[dir];
				pos = [pos[0] + dx, pos[1] + dy];

				if (hash.has(`${pos[0]},${pos[1]}`)) {
					pos = [pos[0] - dx, pos[1] - dy];
					hit = true;
					break;
				}

				maxpos = Math.max(maxpos, pos[0] ** 2 + pos[1] ** 2);
			}
		}
	}

	return maxpos;
}

test('robotSim', () => {
	expect(robotSim([4, -1, 3], [])).toBe(25);
	expect(robotSim([4, -1, 4, -2, 4], [[2, 4]])).toBe(65);
	expect(robotSim([6, -1, -1, 6], [])).toBe(36);
	expect(
		robotSim(
			[-2, -1, 8, 9, 6],
			[
				[-1, 3],
				[0, 1],
				[-1, 5],
				[-2, -4],
				[5, 4],
				[-2, -3],
				[5, -1],
				[1, -1],
				[5, 5],
				[5, 2],
			],
		),
	).toBe(0);
});
