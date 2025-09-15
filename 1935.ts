function canBeTypedWords(text: string, brokenLetters: string): number {
	const broken = new Set(brokenLetters);

	return text.split(' ').reduce((acc, word) => {
		const letters = new Set(word);

		for (const letter of broken) {
			if (letters.has(letter)) {
				return acc;
			}
		}

		return acc + 1;
	}, 0);
}

test('canBeTypedWords', () => {
	expect(canBeTypedWords('hello world', 'ad')).toBe(1);
});
