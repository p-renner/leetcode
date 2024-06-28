function maximumImportance(n: number, roads: number[][]): number {
	const map = Array(n).fill(0);

	for (const road of roads) {
		map[road[0]]++;
		map[road[1]]++;
	}

	return map.sort((a, b) => a - b).reduce((p, c, i) => (p += c * (i + 1)));
}

test('maximumImportance', () => {
	expect(
		maximumImportance(5, [
			[0, 1],
			[1, 2],
			[2, 3],
			[0, 2],
			[1, 3],
			[2, 4],
		]),
	).toBe(43);
});
