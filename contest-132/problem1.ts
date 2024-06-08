function clearDigits(s: string): string {
	let digit = s.match(/\d/);
	while (digit && digit.index) {
		s = s.substring(0, digit.index - 1) + s.substring(digit.index + 1);
		digit = s.match(/\d/);
	}
	return s;
}

test('clearDigits', () => {
	expect(clearDigits('abc123')).toBe('');
	expect(clearDigits('abc')).toBe('abc');
	expect(clearDigits('a1bc23')).toBe('');
	expect(clearDigits('')).toBe('');
	expect(clearDigits('abc1cd5ef2')).toBe('abce');
	expect(clearDigits('abc12cd5ef2')).toBe('ace');
});
