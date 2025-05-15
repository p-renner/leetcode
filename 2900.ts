function getLongestSubsequence(words: string[], groups: number[]): string[] {
	let last = groups[0];
	const res = [words[0]];

	for (let i = 1; i < groups.length; i++) {
		if (groups[i] === last) {
			continue;
		}

		last = groups[i];
		res.push(words[i]);
	}

	return res;
}

test('getLongestSubsequence', () => {
	expect(getLongestSubsequence(['c'], [0])).toStrictEqual(['c']);
	expect(getLongestSubsequence(['d'], [1])).toStrictEqual(['d']);
	expect(getLongestSubsequence(['e', 'a', 'b'], [0, 0, 1])).toStrictEqual(['e', 'b']);
});
