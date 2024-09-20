function shortestPalindrome(s: string): string {
	const reversed = s.split('').reverse().join('');

	for (let i = 0; i < s.length; i++) {
		if (s.slice(0, s.length - i) == reversed.slice(i)) {
			return reversed.slice(0, i) + s;
		}
	}
	return '';
}

test('shortestPalindrome', () => {
	expect(shortestPalindrome('aacecaaa')).toBe('aaacecaaa');
	expect(shortestPalindrome('abcd')).toBe('dcbabcd');
	expect(shortestPalindrome('')).toBe('');
	expect(shortestPalindrome('abb')).toBe('bbabb');
	expect(shortestPalindrome('aabba')).toBe('abbaabba');
	expect(shortestPalindrome('ababbbabbaba')).toBe('ababbabbbababbbabbaba');
	expect(shortestPalindrome('uzshapsrumhevxrpqnwxvkhff')).toBe('ffhkvxwnqprxvehmurspahszuzshapsrumhevxrpqnwxvkhff');
	expect(shortestPalindrome('abbabaab')).toBe('baababbabaab');
});
