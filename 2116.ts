function canBeValid(s: string, locked: string): boolean {
	if (s.length % 2 == 1) {
		return false;
	}

	const open = [];
	const unlocked = [];

	for (let i = 0; i < s.length; i++) {
		if (locked[i] == '0') {
			unlocked.push(i);
			continue;
		}

		if (s[i] == '(') {
			open.push(i);
			continue;
		}

		if (open.length > 0) {
			open.pop();
			continue;
		}

		if (unlocked.length > 0) {
			unlocked.pop();
			continue;
		}

		return false;
	}

	while (open.length > 0 && unlocked.length > 0 && open[open.length - 1] < unlocked[unlocked.length - 1]) {
		open.pop();
		unlocked.pop();
	}

	if (open.length > 0) {
		return false;
	}

	return true;
}

test('canBeValid', () => {
	expect(canBeValid('())()))()(()(((())(()()))))((((()())(())', '1011101100010001001011000000110010100101')).toBe(
		true,
	);
	expect(canBeValid('((()(()()))()((()()))))()((()(()', '10111100100101001110100010001001')).toBe(true);
	expect(canBeValid('(()))())', '11001111')).toBe(true);
	expect(canBeValid('))()))', '010100')).toBe(true);
	expect(canBeValid('()()', '0000')).toBe(true);
	expect(canBeValid(')', '0')).toBe(false);
});

// (|)()|)(|||)|||(||(|)(||||||((||)|)||(|)
