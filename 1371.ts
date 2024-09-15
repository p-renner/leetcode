function findTheLongestSubstring(s: string): number {
	let prefixXOR = 0;
	const characterMap = new Array(26).fill(0);
	characterMap[0] = 1;
	characterMap[4] = 2;
	characterMap[8] = 4;
	characterMap[14] = 8;
	characterMap[20] = 16;

	const mp = new Array(32).fill(-1);
	let longest = 0;

	for (let i = 0; i < s.length; i++) {
		prefixXOR ^= characterMap[s.charCodeAt(i) - 97];

		if (mp[prefixXOR] == -1 && prefixXOR != 0) {
			mp[prefixXOR] = i;
		}
		longest = Math.max(longest, i - mp[prefixXOR]);
	}

	return longest;
}

test('findTheLongestSubstring', () => {
	expect(findTheLongestSubstring('eleetminicoworoep')).toBe(13);
	expect(findTheLongestSubstring('leetcodeisgreat')).toBe(5);
	expect(findTheLongestSubstring('bcbcbc')).toBe(6);
});
