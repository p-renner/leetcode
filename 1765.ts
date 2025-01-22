function highestPeak(isWater: number[][]): number[][] {
	const dirs = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	const m = isWater.length;
	const n = isWater[0].length;
	const heights = Array.from({ length: m }, () => Array(n).fill(-1));
	const queue: [number, number, number][] = [];

	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			if (isWater[row][col] === 1) {
				heights[row][col] = 0;
				queue.push([row, col, 0]);
			}
		}
	}

	for (const [x, y, h] of queue) {
		for (const [dx, dy] of dirs) {
			const currX = x + dx;
			const currY = y + dy;

			if (currX < 0 || currX >= m || currY < 0 || currY >= n || heights[currX][currY] !== -1) {
				continue;
			}

			heights[currX][currY] = h + 1;
			queue.push([currX, currY, h + 1]);
		}
	}

	return heights;
}

test('highestPeak', () => {
	expect(
		highestPeak([
			[0, 1],
			[0, 0],
		]),
	).toStrictEqual([
		[1, 0],
		[2, 1],
	]);
	expect(
		highestPeak([
			[0, 0, 1],
			[1, 0, 0],
			[0, 0, 0],
		]),
	).toStrictEqual([
		[1, 1, 0],
		[0, 1, 1],
		[1, 2, 2],
	]);
});
