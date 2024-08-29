function removeStones(stones: number[][]): number {
	const found = new Set<number>();
	const counts = new Map<number, number>();

	for (let i = 0; i < stones.length; i++) {
		if (found.has(i)) {
			continue;
		}

		found.add(i);
		counts.set(i, 0);

		const row = new Set<number>([stones[i][0]]);
		const col = new Set<number>([stones[i][1]]);

		let j = i + 1;
		while (j < stones.length) {
			if (found.has(j)) {
				j++;
				continue;
			}

			if (row.has(stones[j][0]) || col.has(stones[j][1])) {
				found.add(j);
				row.add(stones[j][0]);
				col.add(stones[j][1]);
				counts.set(i, counts.get(i) + 1);

				j = i + 1;
				continue;
			}

			j++;
		}
	}

	return Array.from(counts.values()).reduce((a, b) => a + b, 0);
}

test('removeStones', () => {
	expect(
		removeStones([
			[0, 0],
			[0, 1],
			[1, 0],
			[1, 2],
			[2, 1],
			[2, 2],
		]),
	).toBe(5);
	expect(
		removeStones([
			[0, 0],
			[0, 2],
			[1, 1],
			[2, 0],
			[2, 2],
		]),
	).toBe(3);
	expect(removeStones([[0, 0]])).toBe(0);
	expect(
		removeStones([
			[0, 1],
			[1, 0],
			[1, 1],
		]),
	).toBe(2);
});
