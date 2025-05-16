function getWordsInLongestSubsequence(words: string[], groups: number[]): string[] {
	const dp = new Array(words.length).fill(1);
	const refs = new Array(words.length);
	dp[0] = 1;

	for (let i = 1; i < words.length; i++) {
		for (let j = i - 1; j >= 0; j--) {
			const wordI = words[i];
			const wordJ = words[j];

			if (groups[i] == groups[j]) {
				continue;
			}

			if (words[i].length != words[j].length) {
				continue;
			}

			let dist1 = false;

			for (let k = 0; k < wordI.length; k++) {
				if (wordI[k] == wordJ[k]) {
					continue;
				}

				if (dist1) {
					dist1 = false;
					break;
				}

				dist1 = true;
			}

			if (!dist1) {
				continue;
			}

			if (dp[j] + 1 > dp[i]) {
				dp[i] = dp[j] + 1;
				refs[i] = j;
			}
		}
	}

	const max = Math.max(...dp);
	let ref = dp.lastIndexOf(max);
	const res: string[] = [];
	res.unshift(words[ref]);

	while (refs[ref] != undefined) {
		ref = refs[ref];
		res.unshift(words[ref]);
	}

	return res;
}

test('getWordsInLongestSubsequence', () => {
	expect(getWordsInLongestSubsequence(['bab', 'dab', 'cab'], [1, 2, 2])).toStrictEqual(['bab', 'cab']);
	expect(getWordsInLongestSubsequence(['a', 'b', 'c', 'd'], [1, 2, 3, 4])).toStrictEqual(['a', 'b', 'c', 'd']);
});
