function uncommonFromSentences(s1: string, s2: string): string[] {
	const words1 = wordMap(s1.split(' '));
	const words2 = wordMap(s2.split(' '));
	const result: string[] = [];

	for (const [word, amount] of words1) {
		if (amount != 1) {
			continue;
		}

		if (words2.has(word)) {
			continue;
		}

		result.push(word);
	}

	for (const [word, amount] of words2) {
		if (amount != 1) {
			continue;
		}

		if (words1.has(word)) {
			continue;
		}

		result.push(word);
	}

	return result;
}

function wordMap(words: string[]): Map<string, number> {
	const map = new Map<string, number>();

	words.forEach((word) => {
		map.set(word, (map.get(word) || 0) + 1);
	});

	return map;
}

test('uncommonFromSentences', () => {
	expect(uncommonFromSentences('this apple is sweet', 'this apple is sour')).toStrictEqual(['sweet', 'sour']);
	expect(uncommonFromSentences('apple apple', 'banana')).toStrictEqual(['banana']);
});
