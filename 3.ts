function lengthOfLongestSubstring(s: string): number {
	let max = 0;
	let map = new Map();
	let left = 0;
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			left = Math.max(left, map.get(s[i]) + 1);
		}
		map.set(s[i], i);
		max = Math.max(max, i - left + 1);
	}
	return max;
}

test('lengthOfLongestSubstring', () => {
	expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
	expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
	expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
	expect(lengthOfLongestSubstring('')).toBe(0);
	expect(lengthOfLongestSubstring(' ')).toBe(1);
	expect(lengthOfLongestSubstring('au')).toBe(2);
	expect(lengthOfLongestSubstring('dvdf')).toBe(3);
	expect(lengthOfLongestSubstring('abba')).toBe(2);
});
