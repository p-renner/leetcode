function longestPalindrome(words: string[]): number {
	const map = new Map<string, number>();

	for (const word of words) {
		map.set(word, (map.get(word) || 0) + 1);
	}

	let odd = false;
	let res = 0;
	const seen = new Set();

	for (const [word, count] of map.entries()) {
		if (seen.has(word)) {
			continue;
		}

		let reverse = word[1] + word[0];
		seen.add(reverse);

		if (reverse == word) {
			if (count % 2 == 1 && odd == false) {
				odd = true;
				res += 2;
			}

			res += (count & ~1) * 2;
			continue;
		}

		const reverseCount = map.get(reverse) || 0;

		res += 4 * Math.min(count, reverseCount);
	}

	return res;
}

test('longestPalindrome', () => {
	expect(longestPalindrome(['lc', 'cl', 'gg'])).toBe(6);
	expect(longestPalindrome(['ab', 'ty', 'yt', 'lc', 'cl', 'ab'])).toBe(8);
	expect(longestPalindrome(['cc', 'll', 'xx'])).toBe(2);
	expect(
		longestPalindrome(['dd', 'aa', 'bb', 'dd', 'aa', 'dd', 'bb', 'dd', 'aa', 'cc', 'bb', 'cc', 'dd', 'cc']),
	).toBe(22);
});
