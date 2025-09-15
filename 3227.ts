function doesAliceWin(s: string): boolean {
	const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

	return s.split('').find((c) => vowels.has(c)) != undefined;
}

test('doesAliceWin', () => {
	expect(doesAliceWin('leetcoder')).toBe(true);
	expect(doesAliceWin('bbcd')).toBe(false);
});
