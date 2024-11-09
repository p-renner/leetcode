function rotateString(s: string, goal: string): boolean {
	if (s.length != goal.length) {
		return false;
	}

	if (s == goal) {
		return true;
	}

	for (let i = 1; i < s.length; i++) {
		if (goal.endsWith(s.slice(0, s.length - i)) && goal.startsWith(s.slice(-i))) {
			return true;
		}
	}

	return false;
}

test('rotateString', () => {
	expect(rotateString('abcde', 'cdeab')).toBe(true);
	expect(rotateString('abcde', 'abced')).toBe(false);
});
