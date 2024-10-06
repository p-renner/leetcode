function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
	if (sentence1.length > sentence2.length) {
		return areSentencesSimilar(sentence2, sentence1);
	}

	let [words1, words2] = [sentence1, sentence2].map((word) => word.split(' '));
	let [prefix, postfix] = [0, 0];

	for (let i = 0; i < words1.length; i++) {
		if (words1[i] !== words2[i]) {
			break;
		}
		prefix++;
	}

	for (let i = 0; i < words1.length; i++) {
		if (words1[words1.length - i - 1] !== words2[words2.length - i - 1]) {
			break;
		}
		postfix++;
	}

	return prefix + postfix >= words1.length;
}

test('areSentencesSimilar', () => {
	expect(areSentencesSimilar('My name is Haley', 'My Haley')).toBe(true);
	expect(areSentencesSimilar('of', 'A lot of words')).toBe(false);
	expect(areSentencesSimilar('Eating right now', 'Eating')).toBe(true);
});
