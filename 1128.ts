function numEquivDominoPairs(dominoes: number[][]): number {
	const seen = new Map<string, number>();

	dominoes
		.map(([a, b]) => {
			if (a > b) {
				[a, b] = [b, a];
			}

			return '' + a + b;
		})
		.forEach((dominoe) => seen.set(dominoe, (seen.get(dominoe) || 0) + 1));

	return [...seen.values()].reduce((acc, curr) => acc + (curr * (curr - 1)) / 2, 0);
}

test('numEquivDominoPairs', () => {
	expect(
		numEquivDominoPairs([
			[1, 2],
			[2, 1],
			[3, 4],
			[5, 6],
		]),
	).toBe(1);
	expect(
		numEquivDominoPairs([
			[1, 2],
			[1, 2],
			[1, 1],
			[1, 2],
			[2, 2],
		]),
	).toBe(3);
});
