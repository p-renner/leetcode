function areAlmostEqual(s1: string, s2: string): boolean {
	const nonEqual = [];

	for (let i = 0; i < s2.length; i++) {
		if (s1[i] == s2[i]) {
			continue;
		}
		nonEqual.push(i);
	}

	if (nonEqual.length == 0) {
		return true;
	}

	if (nonEqual.length == 2) {
		return s1[nonEqual[0]] == s2[nonEqual[1]] && s1[nonEqual[1]] == s2[nonEqual[0]];
	}

	return false;
}

test('areAlmostEqual', () => {
	expect(areAlmostEqual('bank', 'kanb')).toBe(true);
	expect(areAlmostEqual('attack', 'defend')).toBe(false);
	expect(areAlmostEqual('kelb', 'kelb')).toBe(true);
	expect(areAlmostEqual('caa', 'aaz')).toBe(false);
});
