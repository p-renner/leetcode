function findChampion(n: number, edges: number[][]): number {
	const set = new Set(Array.from({ length: n }, (_, i) => i));

	for (const [_, t] of edges) {
		set.delete(t);
	}

	if (set.size != 1) {
		return -1;
	}

	return set.values().next().value;
}

test('findChampion', () => {
	expect(
		findChampion(3, [
			[0, 1],
			[1, 2],
		]),
	).toBe(0);
	expect(
		findChampion(4, [
			[0, 2],
			[1, 3],
			[1, 2],
		]),
	).toBe(-1);
});
