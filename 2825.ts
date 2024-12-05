function canMakeSubsequence(str1: string, str2: string): boolean {
	let p2 = 0;

	for (const c of str1) {
		const charCode = c.charCodeAt(0);
		const charCode2 = str2.charCodeAt(p2);

		if (charCode == charCode2 || charCode + 1 == charCode2 || (charCode == 122 && charCode2 == 97)) {
			p2++;

			if (p2 == str2.length) {
				return true;
			}
		}
	}

	return false;
}

test('canMakeSubsequence', () => {
	expect(canMakeSubsequence('zabc', 'ad')).toBe(true);
	expect(canMakeSubsequence('zc', 'ad')).toBe(true);
	expect(canMakeSubsequence('ab', 'd')).toBe(false);
});
