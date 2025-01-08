function countPrefixSuffixPairs(words: string[]): number {
	return words.reduce((acc, word, i) => {
		for (let j = i + 1; j < words.length; j++) {
			if (words[j].startsWith(word) && words[j].endsWith(word)) {
				acc++;
			}
		}
		return acc;
	}, 0);
}

test('countPrefixSuffixPairs', () => {
	expect(countPrefixSuffixPairs(['a', 'aba', 'ababa', 'aa'])).toBe(4);
	expect(countPrefixSuffixPairs(['pa', 'papa', 'ma', 'mama'])).toBe(2);
	expect(countPrefixSuffixPairs(['abab', 'ab'])).toBe(0);
});
