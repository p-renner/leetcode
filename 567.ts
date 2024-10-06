function checkInclusion(s1: string, s2: string): boolean {
	if (s1.length > s2.length) return false;

	const s1Arr = new Array(26).fill(0);
	const s2Arr = new Array(26).fill(0);

	for (let i = 0; i < s1.length; i++) {
		s1Arr[s1.charCodeAt(i) - 97]++;
		s2Arr[s2.charCodeAt(i) - 97]++;
	}

	if (JSON.stringify(s1Arr) == JSON.stringify(s2Arr)) {
		return true;
	}

	for (let i = s1.length; i < s2.length; i++) {
		s2Arr[s2.charCodeAt(i - s1.length) - 97]--;
		s2Arr[s2.charCodeAt(i) - 97]++;

		if (JSON.stringify(s1Arr) == JSON.stringify(s2Arr)) {
			return true;
		}
	}

	return false;
}

test('checkInclusion', () => {
	expect(checkInclusion('ab', 'eidbaooo')).toBe(true);
	expect(checkInclusion('ab', 'eidboaoo')).toBe(false);
});
