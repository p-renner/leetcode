function slidingPuzzle(board: number[][]): number {
	const target = '123450';
	const start = board.flat().join('');
	const moves = [
		[1, 3],
		[0, 2, 4],
		[1, 5],
		[0, 4],
		[1, 3, 5],
		[2, 4],
	];
	const visited = new Set<string>();
	const queue = [start];
	let step = 0;

	while (queue.length) {
		const next = [];
		for (const node of queue) {
			if (node === target) {
				return step;
			}
			const zero = node.indexOf('0');
			for (const move of moves[zero]) {
				const nextNode = swap(node, zero, move);
				if (!visited.has(nextNode)) {
					visited.add(nextNode);
					next.push(nextNode);
				}
			}
		}
		queue.length = 0;
		queue.push(...next);
		step++;
	}

	return -1;

	function swap(str: string, i: number, j: number): string {
		const arr = str.split('');
		[arr[i], arr[j]] = [arr[j], arr[i]];
		return arr.join('');
	}
}

test('slidingPuzzle', () => {
	expect(
		slidingPuzzle([
			[1, 2, 3],
			[4, 0, 5],
		]),
	).toBe(1);
	expect(
		slidingPuzzle([
			[1, 2, 3],
			[5, 4, 0],
		]),
	).toBe(-1);
	expect(
		slidingPuzzle([
			[4, 1, 2],
			[5, 0, 3],
		]),
	).toBe(5);
});
