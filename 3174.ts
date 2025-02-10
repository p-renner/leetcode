function clearDigits(s: string): string {
	const res: string[] = [];

	for (let i = 0; i < s.length; i++) {
		const isDigit = /\d/.test(s[i]);

		if (isDigit) {
			res.pop();
			continue;
		}

		res.push(s[i]);
	}

	return res.join('');
}

test('clearDigits', () => {
	expect(clearDigits('abc')).toBe('abc');
	expect(clearDigits('cb34')).toBe('');
});
