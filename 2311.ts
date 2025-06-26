function longestSubsequence(s: string, k: number): number {
	let res = s.length;

	if (Number.parseInt(s, 2) <= k) {
		return res;
	}

	const arr = s.split('');

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == '1') {
			arr[i] = '0';
			res--;

			if (Number.parseInt(arr.join(''), 2) <= k) {
				return res;
			}
		}
	}

	return res;
}

test('longestSubsequence', () => {
	expect(longestSubsequence('1001010', 5)).toBe(5);
	expect(longestSubsequence('00101001', 1)).toBe(6);
	expect(longestSubsequence('0111101', 518459120)).toBe(7);
});
