function isSubsequence(s: string, t: string): boolean {
	const len = s.length;
	let curr = 0;

	for (const char of t) {
		if (char == s[curr]) {
			curr++;
		}

		if (curr == len) return true;
	}

	return curr == len;
}

test('isSubsequence', () => {
	expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
	expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
});
