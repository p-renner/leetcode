function removeOccurrences(s: string, part: string): string {
	const stack: string[] = [];
	const lastPartChar = part[part.length - 1];

	for (let i = 0; i < s.length; i++) {
		if (s[i] != lastPartChar) {
			stack.push(s[i]);
			continue;
		}

		const subString = part.length == 1 ? lastPartChar : stack.slice(-part.length + 1).join('') + lastPartChar;

		if (subString != part) {
			stack.push(s[i]);
			continue;
		}

		for (let i = 0; i < part.length - 1; i++) {
			stack.pop();
		}
	}

	return stack.join('');
}

test('removeOccurrences', () => {
	expect(removeOccurrences('daabcbaabcbc', 'abc')).toBe('dab');
	expect(removeOccurrences('gjzgbpggjzgbpgsvpwdk', 'gjzgbpg')).toBe('svpwdk');
	expect(removeOccurrences('wwwwwwwwwwwwwwwwwwwwwvwwwwswxwwwwsdwxweeohapwwzwuwajrnogb', 'w')).toBe(
		'vsxsdxeeohapzuajrnogb',
	);
});
