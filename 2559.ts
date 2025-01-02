function vowelStrings(words: string[], queries: number[][]): number[] {
	const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
	const prefix = [0];

	for (const word of words) {
		if (!vowels.has(word[0]) || !vowels.has(word[word.length - 1])) {
			prefix.push(prefix[prefix.length - 1]);
			continue;
		}

		prefix.push(1 + prefix[prefix.length - 1]);
	}

	return queries.map(([start, end]) => prefix[end + 1] - prefix[start]);
}

test('vowelStrings', () => {
	expect(
		vowelStrings(
			['aba', 'bcb', 'ece', 'aa', 'e'],
			[
				[0, 2],
				[1, 4],
				[1, 1],
			],
		),
	).toStrictEqual([2, 3, 0]);
	expect(
		vowelStrings(
			['a', 'e', 'i'],
			[
				[0, 2],
				[0, 1],
				[2, 2],
			],
		),
	).toStrictEqual([3, 2, 1]);
});
