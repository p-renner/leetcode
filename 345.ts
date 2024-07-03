// 2 Pointer Solution would be faster
function reverseVowels(s: string): string {
	const orig = s.split('');
	const vowels = orig.filter(isVowel).reverse();

	let res = '';
	for (let char of orig) {
		if (isVowel(char)) {
			res += vowels.shift()!;
			continue;
		}
		res += char;
	}

	return res;
}

function isVowel(c: string): boolean {
	return new Set(['a', 'e', 'i', 'o', 'u']).has(c.toLowerCase());
}

test('reverseVowels', () => {
	expect(reverseVowels('hello')).toBe('holle');
	expect(reverseVowels('leetcode')).toBe('leotcede');
});
