function isPrefixOfWord(sentence: string, searchWord: string): number {
	const words = sentence.split(' ');

	for (let i = 0; i < words.length; i++) {
		if (words[i].length < searchWord.length) {
			continue;
		}

		if (words[i].slice(0, searchWord.length) == searchWord) {
			return i + 1;
		}
	}

	return -1;
}

test('isPrefixOfWord', () => {
	expect(isPrefixOfWord('i love eating burger', 'burg')).toBe(4);
	expect(isPrefixOfWord('this problem is an easy problem', 'pro')).toBe(2);
	expect(isPrefixOfWord('i am tired', 'you')).toBe(-1);
});
