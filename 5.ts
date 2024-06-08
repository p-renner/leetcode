function longestPalindrome(s: string): string {
	if (s.length <= 1) {
		return s;
	}

	let longest = s[0];

	for (let i = 0; i < s.length; i++) {
		let offset = Math.ceil(longest.length / 2);

		while (i - offset >= 0 && i + offset < s.length) {
			const curr = s.substring(i - offset, i + offset + 1);
			if (!isPalindrome(curr)) {
				break;
			}
			longest = curr.length > longest.length ? curr : longest;
			offset++;
		}

		offset = Math.ceil(longest.length / 2) - 1;
		while (i - offset >= 0 && i + offset + 1 < s.length) {
			const curr = s.substring(i - offset, i + offset + 2);
			if (!isPalindrome(curr)) {
				break;
			}
			longest = curr.length > longest.length ? curr : longest;
			offset++;
		}
	}

	return longest;
}

function isPalindrome(s: string): boolean {
	return s == s.split('').reverse().join('');
}

test('longestPalindrome', () => {
	expect(longestPalindrome('babad')).toBe('bab');
	expect(longestPalindrome('cbbd')).toBe('bb');
	expect(longestPalindrome('a')).toBe('a');
	expect(longestPalindrome('ac')).toBe('a');
	expect(longestPalindrome('bb')).toBe('bb');
	expect(longestPalindrome('ccc')).toBe('ccc');
	expect(longestPalindrome('aaaa')).toBe('aaaa');
	expect(longestPalindrome('aaaaa')).toBe('aaaaa');
	expect(longestPalindrome('aaaaaa')).toBe('aaaaaa');
});
