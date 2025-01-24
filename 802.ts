function eventualSafeNodes(graph: number[][]): number[] {
	const loops = new Map<number, boolean>();
	const res: number[] = [];

	for (let i = 0; i < graph.length; i++) {
		if (test(i)) {
			res.push(i);
		}
	}

	function test(i: number): boolean {
		if (loops.has(i)) {
			return loops.get(i);
		}

		if (graph[i].length == 0) {
			loops.set(i, true);
			return true;
		}

		loops.set(i, false);

		for (const j of graph[i]) {
			if (!test(j)) {
				return false;
			}
		}

		loops.set(i, true);
		return true;
	}

	return res;
}

test('eventualSaveNodes', () => {
	expect(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []])).toStrictEqual([2, 4, 5, 6]);
	expect(eventualSafeNodes([[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []])).toStrictEqual([4]);
});
