function checkStrings(s1: string, s2: string): boolean {
	const chars1 = Array.from({ length: 2 }, () => new Array(26).fill(0));

	for (let i = 0; i < s1.length; i++) {
		const mod = i % 2 == 0 ? 0 : 1;
		chars1[mod][s1.charCodeAt(i) - 97]++;
		chars1[mod][s2.charCodeAt(i) - 97]--;
	}

	return chars1.every((arr) => arr.every((num) => num === 0));
}

describe('checkStrings', () => {
	test('case 1', () => {
		expect(checkStrings('abcdba', 'cabdab')).toBe(true);
	});
	test('case 2', () => {
		expect(checkStrings('abe', 'bea')).toBe(false);
	});
});
