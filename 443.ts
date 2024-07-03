function compress(chars: string[]): number {
	let last = chars[0];
	let charsLen = 0;
	let len = 1;

	for (let i = 1; i < chars.length; i++) {
		if (last == chars[i]) {
			len++;
			continue;
		}

		chars[charsLen] = last;
		charsLen++;

		if (len > 1) {
			for (const digit of len.toString().split('')) {
				chars[charsLen] = digit;
				charsLen++;
			}
		}

		last = chars[i];
		len = 1;
	}

	chars[charsLen] = last;
	charsLen++;

	if (len > 1) {
		for (const digit of len.toString().split('')) {
			chars[charsLen] = digit;
			charsLen++;
		}
	}

	return charsLen;
}

test('compress', () => {
	const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
	expect(compress(chars)).toBe(6);
	expect(chars.slice(0, 6)).toStrictEqual(['a', '2', 'b', '2', 'c', '3']);
});
