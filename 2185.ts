function prefixCount(words: string[], pref: string): number {
	return words.reduce((count, word) => count + (word.startsWith(pref) ? 1 : 0), 0);
}

test('prefixCount', () => {
	expect(prefixCount(['pay', 'attention', 'practice', 'attend'], 'at')).toBe(2);
	expect(prefixCount(['leetcode', 'win', 'loops', 'success'], 'code')).toBe(0);
});
