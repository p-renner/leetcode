function maxScore(s: string): number {
	let ones = s.split('').reduce((acc, c) => (c == '1' ? acc + 1 : acc), 0);
	let zeros = 0;
	let res = ones - 1;

	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] == '1') {
			ones--;
			continue;
		}

		zeros++;
		res = Math.max(res, ones + zeros);
	}

	return res;
}

test('maxScore', () => {
	expect(maxScore('011101')).toBe(5);
	expect(maxScore('00111')).toBe(5);
	expect(maxScore('1111')).toBe(3);
});
