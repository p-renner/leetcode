function largestCombination(candidates: number[]): number {
	const map = new Map<number, number>();

	candidates.forEach((num) =>
		num
			.toString(2)
			.split('')
			.forEach((c, i, a) => {
				if (c == '1') {
					map.set(a.length - i, (map.get(a.length - i) || 0) + 1);
				}
			}),
	);

	return Math.max(...map.values());
}

test('largestCombination', () => {
	expect(largestCombination([16, 17, 71, 62, 12, 24, 14])).toBe(4);
	expect(largestCombination([8, 8])).toBe(2);
});
