function minimumLength(s: string): number {
	const freq = new Map<string, number>();

	for (const c of s) {
		freq.set(c, (freq.get(c) || 0) + 1);
	}

	return [...freq.values()].reduce((acc, curr) => acc + (curr % 2 == 0 ? 2 : 1), 0);
}

test('minimumLength', () => {
	expect(minimumLength('abaacbcbb')).toBe(5);
	expect(minimumLength('aa')).toBe(2);
});
