function removeStars(s: string): string {
	const stack: string[] = [];

	for (const char of s) {
		if (char == '*') {
			stack.pop();
			continue;
		}
		stack.push(char);
	}

	return stack.join('');
}

test('removeStars', () => {
	expect(removeStars('leet**cod*e')).toBe('lecoe');
	expect(removeStars('erase*****')).toBe('');
	expect(removeStars('abb*cdfg*****x*')).toBe('a');
});
