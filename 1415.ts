function getHappyString(n: number, k: number): string {
	const happyStrings: string[] = [];

	function buildHappyStrings(s: string) {
		if (s.length == n) {
			happyStrings.push(s);
			return;
		}

		for (const c of ['a', 'b', 'c']) {
			if (s[s.length - 1] == c) {
				continue;
			}

			buildHappyStrings(s + c);
		}
	}
	buildHappyStrings('');

	return happyStrings[k - 1] || '';
}

test('getHappyString', () => {
	expect(getHappyString(1, 3)).toBe('c');
	expect(getHappyString(1, 4)).toBe('');
	expect(getHappyString(3, 9)).toBe('cab');
});
