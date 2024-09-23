function minExtraChar(s: string, dictionary: string[]): number {
	const dp = new Array(s.length + 1).fill(0);
	const dict = new Set(dictionary);

	for (let i = 1; i <= s.length; i++) {
		dp[i] = dp[i - 1] + 1;

		for (let j = 0; j < i; j++) {
			if (dict.has(s.substring(j, i))) {
				dp[i] = Math.min(dp[i], dp[j]);
			}
		}
	}

	return dp[s.length];
}

test('minExtraChar', () => {
	expect(minExtraChar('leetscode', ['leet', 'code', 'leetcode'])).toBe(1);
	expect(minExtraChar('sayhelloworld', ['hello', 'world'])).toBe(3);
});
