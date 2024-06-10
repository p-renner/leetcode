function replaceWords(dictionary: string[], sentence: string): string {
	const cache = new Map<string, string>();
	const words = sentence.split(' ');
	dictionary.sort((a, b) => a.length - b.length);

	for (let i = 0; i < words.length; i++) {
		if (cache.has(words[i])) {
			words[i] = cache.get(words[i])!;
			continue;
		}

		for (const root of dictionary) {
			if (words[i].startsWith(root)) {
				words[i] = root;
				cache.set(words[i], root);
				break;
			}
		}
	}

	return words.join(' ');
}

test('replaceWords', () => {
	expect(replaceWords(['cat', 'bat', 'rat'], 'the cattle was rattled by the battery')).toBe(
		'the cat was rat by the bat',
	);
	expect(replaceWords(['a', 'b', 'c'], 'aadsfasf absbs bbab cadsfafs')).toBe('a a b c');
});
