function countPalindromicSubsequence(s: string): number {
	const freqMap = new Map<string, number>();

	for (const c of s) {
		freqMap.set(c, (freqMap.get(c) || 0) + 1);
	}

	let res = 0;
	for (const [c, occ] of freqMap.entries()) {
		if (occ < 2) {
			continue;
		}

		const first = s.indexOf(c);
		const last = s.lastIndexOf(c);
		const uniques = new Set<string>();

		for (let i = first + 1; i < last; i++) {
			uniques.add(s[i]);
		}

		res += uniques.size;
	}

	return res;
}

test('countPalindromicSubsequence', () => {
	expect(countPalindromicSubsequence('aabca')).toBe(3);
	expect(countPalindromicSubsequence('adc')).toBe(0);
	expect(countPalindromicSubsequence('bbcbaba')).toBe(4);
});
