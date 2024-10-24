function isMatch(s: string, p: string): boolean {
	return new RegExp('^' + p.replace(/\?/g, '\\w').replace(/\*+/g, '(\\w*?)') + '$').test(s);
}

test('isMatch', () => {
	expect(isMatch('aa', 'a')).toBe(false);
	expect(isMatch('aa', '*')).toBe(true);
	expect(isMatch('cb', '?a')).toBe(false);
	expect(isMatch('', '******')).toBe(true);
	expect(
		isMatch(
			'aaaabaaaabbbbaabbbaabbaababbabbaaaababaaabbbbbbaabbbabababbaaabaabaaaaaabbaabbbbaababbababaabbbaababbbba',
			'*****b*aba***babaa*bbaba***a*aaba*b*aa**a*b**ba***a*a*',
		),
	).toBe(true);
	expect(
		isMatch(
			'abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb',
			'**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb',
		),
	).toBe(false);
});
