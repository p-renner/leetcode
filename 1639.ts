function numWays(words: string[], target: string): number {
	const result = new Array(target.length + 1).fill(0);
	result[0] = 1;

	for (let i = 0; i < words[0].length; i++) {
		let count = new Array(26).fill(0);

		for (let word of words) {
			count[word.charCodeAt(i) - 97]++;
		}

		for (let j = target.length - 1; j >= 0; --j) {
			result[j + 1] = (result[j + 1] + result[j] * count[target.charCodeAt(j) - 97]) % (1e9 + 7);
		}
	}

	return result[target.length] % (1e9 + 7);
}

test('numWays', () => {
	expect(numWays(['acca', 'bbbb', 'caca'], 'aba')).toBe(6);
	expect(numWays(['abba', 'baab'], 'bab')).toBe(4);
	expect(
		numWays(
			[
				'cbabddddbc',
				'addbaacbbd',
				'cccbacdccd',
				'cdcaccacac',
				'dddbacabbd',
				'bdbdadbccb',
				'ddadbacddd',
				'bbccdddadd',
				'dcabaccbbd',
				'ddddcddadc',
				'bdcaaaabdd',
				'adacdcdcdd',
				'cbaaadbdbb',
				'bccbabcbab',
				'accbdccadd',
				'dcccaaddbc',
				'cccccacabd',
				'acacdbcbbc',
				'dbbdbaccca',
				'bdbddbddda',
				'daabadbacb',
				'baccdbaada',
				'ccbabaabcb',
				'dcaabccbbb',
				'bcadddaacc',
				'acddbbdccb',
				'adbddbadab',
				'dbbcdcbcdd',
				'ddbabbadbb',
				'bccbcbbbab',
				'dabbbdbbcb',
				'dacdabadbb',
				'addcbbabab',
				'bcbbccadda',
				'abbcacadac',
				'ccdadcaada',
				'bcacdbccdb',
			],
			'bcbbcccc',
		),
	).toBe(677452090);
});
