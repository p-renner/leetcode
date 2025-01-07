function stringMatching(words: string[]): string[] {
	const res: string[] = [];

	for (let i = 0; i < words.length; i++) {
		for (let j = 0; j < words.length; j++) {
			if (i == j) {
				continue;
			}

			if (words[j].includes(words[i])) {
				res.push(words[i]);
				break;
			}
		}
	}

	return res;
}

test('stringMatching', () => {
	expect(stringMatching(['mass', 'as', 'hero', 'superhero'])).toStrictEqual(['as', 'hero']);
	expect(stringMatching(['leetcode', 'et', 'code'])).toStrictEqual(['et', 'code']);
	expect(stringMatching(['blue', 'green', 'bu'])).toStrictEqual([]);
});
