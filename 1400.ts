function canConstruct(s: string, k: number): boolean {
	const map = new Map<string, number>();

	for (const c of s) {
		map.set(c, (map.get(c) || 0) + 1);
	}

	let even = 0;
	let odd = 0;

	for (const value of map.values()) {
		even += Math.floor(value / 2);

		if (value % 2 == 1) {
			odd++;
		}
	}

	return k >= odd && k <= odd + 2 * even;
}

test('canConstruct', () => {
	expect(canConstruct('annabelle', 2)).toBe(true);
	expect(canConstruct('leetcode', 3)).toBe(false);
	expect(canConstruct('true', 4)).toBe(true);
	expect(canConstruct('aaa', 2)).toBe(true);
});
