import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function minimumTime(grid: number[][]): number {
	if (grid[1][0] > 1 && grid[0][1] > 1) {
		return -1;
	}
	const directions = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];

	function isValid(row: number, col: number): boolean {
		return 0 <= row && row < grid.length && 0 <= col && col < grid[0].length;
	}

	const m = grid.length;
	const n = grid[0].length;

	const minTime = Array.from({ length: m }, () => Array(n).fill(Infinity));
	minTime[0][0] = 0;

	const pq = new MinPriorityQueue<number[]>();
	pq.enqueue([minTime[0][0], 0, 0]);

	while (pq.size() > 0) {
		const [time, row, col] = pq.dequeue();

		if (row === m - 1 && col === n - 1) {
			return time;
		}

		for (const [dx, dy] of directions) {
			const r = row + dx;
			const c = col + dy;

			if (isValid(r, c)) {
				const newTime = time >= grid[r][c] ? time + 1 : grid[r][c] + ((grid[r][c] - time) % 2 === 0 ? 1 : 0);

				if (newTime < minTime[r][c]) {
					minTime[r][c] = newTime;
					pq.enqueue([newTime, r, c]);
				}
			}
		}
	}

	return -1;
}

test('minimumTime', () => {
	expect(
		minimumTime([
			[0, 1, 3, 2],
			[5, 1, 2, 5],
			[4, 3, 8, 6],
		]),
	).toBe(7);
	expect(
		minimumTime([
			[0, 2, 4],
			[3, 2, 1],
			[1, 0, 4],
		]),
	).toBe(-1);
});
