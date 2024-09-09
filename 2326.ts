import { ListNode, listFromArr } from './utils/listnode';

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
	const dirs = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];
	const matrix = Array.from({ length: m }, () => Array.from({ length: n }, () => -1));

	let [x, y] = [0, 0];
	let curr = head;
	let dir = 0;

	while (curr) {
		let [dx, dy] = dirs[dir];
		matrix[x][y] = curr.val;
		curr = curr.next;

		if (x + dx < 0 || x + dx >= m || y + dy < 0 || y + dy >= n || matrix[x + dx][y + dy] !== -1) {
			dir = (dir + 1) % 4;
			[dx, dy] = dirs[dir];
		}

		x += dx;
		y += dy;
	}

	return matrix;
}

test('spiralMatrix', () => {
	expect(spiralMatrix(3, 5, listFromArr([3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0]))).toStrictEqual([
		[3, 0, 2, 6, 8],
		[5, 0, -1, -1, 1],
		[5, 2, 4, 9, 7],
	]);
	expect(spiralMatrix(1, 4, listFromArr([0, 1, 2]))).toStrictEqual([[0, 1, 2, -1]]);
});
