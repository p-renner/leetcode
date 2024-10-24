// I probably overcomplicated this solution, but it works.

function decodeString(s: string): string {
	const stack: string[] = [];

	let curr = '';
	let res = '';

	for (const char of s) {
		if (char == '[') {
			stack.push(curr);
			curr = '';
			continue;
		} else if (char == ']') {
			const val = stack.pop();
			const matches = Array.from(val.matchAll(/[a-z]+|\d+/g));

			if (!matches[1]) {
				if (stack.length == 0) {
					res += curr.repeat(Number.parseInt(matches[0][0]));
					curr = '';
					continue;
				}
				curr = curr.repeat(Number.parseInt(matches[0][0]));
				continue;
			}

			curr = matches[0][0] + curr.repeat(Number.parseInt(matches[1][0]));
			continue;
		}

		curr += char;
	}

	return res + curr;
}

test('decodeString', () => {
	expect(decodeString('2[abc]3[cd]ef')).toBe('abcabccdcdcdef');
	expect(decodeString('3[a]2[bc]')).toBe('aaabcbc');
	expect(decodeString('3[a2[c]]')).toBe('accaccacc');
	expect(decodeString('abc3[cd]xyz')).toBe('abccdcdcdxyz');
	expect(decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef')).toBe(
		'zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef',
	);
});
