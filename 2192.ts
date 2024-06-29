function getAncestors(n: number, edges: number[][]): number[][] {
	const answer: number[][] = [];

	const map = new Map<number, Set<number>>();
	edges.forEach(([from, to]) => {
		map.set(to, (map.get(to) || new Set<number>()).add(from));
	});

	const queue = Array.from({ length: n }, (_, i) => i);

	while (queue.length > 0) {
		const i = queue.shift()!;
		const curr = map.get(i);

		if (!curr) {
			answer[i] = [];
			continue;
		}

		const idek: number[][] = [];
		for (const val of curr.values()) {
			if (!answer[val]) {
				break;
			}
			idek.push(answer[val]);
		}

		if (idek.length < curr.size) {
			queue.push(i);
			continue;
		}

		answer[i] = [...new Set(idek.reduce((p, c) => p.concat(c), [...curr]))].sort((a, b) => a - b);
	}

	return answer;
}

test('getAncestors', () => {
	expect(
		getAncestors(8, [
			[0, 3],
			[0, 4],
			[1, 3],
			[2, 4],
			[2, 7],
			[3, 5],
			[3, 6],
			[3, 7],
			[4, 6],
		]),
	).toEqual([[], [], [], [0, 1], [0, 2], [0, 1, 3], [0, 1, 2, 3, 4], [0, 1, 2, 3]]);
	expect(
		getAncestors(5, [
			[0, 1],
			[0, 2],
			[0, 3],
			[0, 4],
			[1, 2],
			[1, 3],
			[1, 4],
			[2, 3],
			[2, 4],
			[3, 4],
		]),
	).toEqual([[], [0], [0, 1], [0, 1, 2], [0, 1, 2, 3]]);
	expect(
		getAncestors(9, [
			[3, 6],
			[2, 4],
			[8, 6],
			[7, 4],
			[1, 4],
			[2, 1],
			[7, 2],
			[0, 4],
			[5, 0],
			[4, 6],
			[3, 2],
			[5, 6],
			[1, 6],
		]),
	).toEqual([[5], [2, 3, 7], [3, 7], [], [0, 1, 2, 3, 5, 7], [], [0, 1, 2, 3, 4, 5, 7, 8], [], []]);
});
