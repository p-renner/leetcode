function compressedString(word: string): string {
	let prev = word[0];
	let count = 1;
	let comp = '';

	for (let i = 1; i < word.length; i++) {
		if (prev != word[i] || count == 9) {
			comp += count + prev;
			prev = word[i];
			count = 1;
			continue;
		}

		count++;
	}

	return comp + count + prev;
}

test('compressedString', () => {
	expect(compressedString('abcde')).toBe('1a1b1c1d1e');
	expect(compressedString('aabbb')).toBe('2a3b');
	expect(compressedString('aaaaaaaaaaaaaabb')).toBe('9a5a2b');
});
