function maximumLength(s: string): number {
	const map = new Map<string, number>();

	for (let i = 0; i < s.length; i++) {
		let special = '';

		for (let j = i; j < s.length; j++) {
			if (special.length != 0 && special[0] != s[j]) {
				break;
			}

			special += s[j];
			map.set(special, (map.get(special) || 0) + 1);
		}
	}

	return Math.max(
		...Array.from(map.entries())
			.filter(([_, val]) => val > 2)
			.map(([key]) => key.length),
		-1,
	);
}

test('maximumLength', () => {
	expect(maximumLength('aaaa')).toBe(2);
	expect(maximumLength('abcdef')).toBe(-1);
	expect(maximumLength('abcaba')).toBe(1);
});
