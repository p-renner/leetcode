function addSpaces(s: string, spaces: number[]): string {
	let res = '';
	let n = 0;

	for (let i = 0; i < s.length; i++) {
		if (spaces[n] == i) {
			res = res + ' ' + s[i];
			n++;
			continue;
		}

		res += s[i];
	}

	return res;
}

test('addSpaces', () => {
	expect(addSpaces('LeetcodeHelpsMeLearn', [8, 13, 15])).toBe('Leetcode Helps Me Learn');
});
