function sortVowels(s: string): string {
	const chars = s.split('');
	const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
	const vowelPosition: string[] = [];
	const indexPosition: number[] = [];

	for (let i = 0; i < chars.length; i++) {
		if (vowels.has(chars[i])) {
			vowelPosition.push(chars[i]);
			indexPosition.push(i);
		}
	}

	vowelPosition.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

	for (let i = 0; i < vowelPosition.length; i++) {
		chars[indexPosition[i]] = vowelPosition[i];
	}

	return chars.join('');
}

test('sortVowels', () => {
	expect(sortVowels('lEetcOde')).toBe('lEOtcede');
	expect(sortVowels('lYmpH')).toBe('lYmpH');
});
