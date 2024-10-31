function minimumTotalDistance(robot: number[], factory: number[][]): number {
	robot.sort((a, b) => a - b);
	factory.sort((a, b) => a[0] - b[0]);

	const factoryPositions = factory.flatMap(([x, y]) => Array(y).fill(x));
	const memo = Array.from({ length: robot.length + 1 }, () => Array(factoryPositions.length + 1).fill(-1));
	return calculateMinDistance(0, 0);

	function calculateMinDistance(i: number, j: number): number {
		if (memo[i][j] != -1) {
			return memo[i][j];
		}

		if (i == robot.length) {
			memo[i][j] = 0;
			return 0;
		}

		if (j == factoryPositions.length) {
			memo[i][j] = Infinity;
			return Infinity;
		}

		const assign = Math.abs(robot[i] - factoryPositions[j]) + calculateMinDistance(i + 1, j + 1);
		const skip = calculateMinDistance(i, j + 1);

		memo[i][j] = Math.min(assign, skip);
		return memo[i][j];
	}
}

test('minimumTotalDistance', () => {
	expect(
		minimumTotalDistance(
			[0, 4, 6],
			[
				[2, 2],
				[6, 2],
			],
		),
	).toBe(4);
	expect(
		minimumTotalDistance(
			[1, -1],
			[
				[-2, 1],
				[2, 1],
			],
		),
	).toBe(2);
});
