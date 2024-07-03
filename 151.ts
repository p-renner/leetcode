function reverseWords(s: string): string {
	return s
		.split(' ')
		.filter((w) => !!w)
		.reverse()
		.join(' ');
}

test('reverseWords', () => {
	expect(reverseWords('the sky is blue')).toBe('blue is sky the');
	expect(reverseWords('  hello world  ')).toBe('world hello');
	expect(reverseWords('a good   example')).toBe('example good a');
});
