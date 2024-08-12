function longestPalindrome(s: string): string {
	let queue = Array.from({ length: s.length }, (_, i) => [i, i]);

	for (let i = 1; i < s.length; i++) {
		if (s[i] == s[i - 1]) {
			queue.unshift([i - 1, i]);
		}
	}

	let longest = s[0];

	while (queue.length > 0) {
		longest = s.slice(queue[0][0], queue[0][1] + 1);
		queue = queue.filter(([i, j]) => i - 1 >= 0 && s[i - 1] == s[j + 1]).map(([i, j]) => [i - 1, j + 1]);
	}

	return longest;
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
