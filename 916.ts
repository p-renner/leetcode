function wordSubsets(words1: string[], words2: string[]): string[] {
	const maxFreq = new Map<string, number>();

	for (const word of words2) {
		const freq = new Map<string, number>();

		for (const c of word) {
			freq.set(c, (freq.get(c) || 0) + 1);
		}

		for (const [key, val] of freq.entries()) {
			maxFreq.set(key, Math.max(maxFreq.get(key) || 0, val));
		}
	}

	const res: string[] = [];

	for (const word of words1) {
		const freq = new Map<string, number>();

		for (const c of word) {
			freq.set(c, (freq.get(c) || 0) + 1);
		}

		let add = true;
		console.log(word);

		for (const [key, val] of maxFreq.entries()) {
			if (!freq.has(key)) {
				add = false;
				break;
			}

			if (freq.get(key) < val) {
				add = false;
				break;
			}
		}

		if (add) {
			res.push(word);
		}
	}

	return res;
}

test('wordSubsets', () => {
	expect(wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['e', 'o'])).toStrictEqual([
		'facebook',
		'google',
		'leetcode',
	]);
	expect(wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['l', 'e'])).toStrictEqual([
		'apple',
		'google',
		'leetcode',
	]);
});
