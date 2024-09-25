class TrieNode {
	children: Array<TrieNode>;
	score: number;
	constructor() {
		this.children = new Array<TrieNode>(26);
		this.score = 0;
	}
}

function sumPrefixScores(words: string[]): number[] {
	const root = new TrieNode();

	for (const word of words) {
		let curr = root;

		for (const c of word) {
			const index = c.charCodeAt(0) - 97;

			if (!curr.children[index]) {
				curr.children[index] = new TrieNode();
			}

			curr = curr.children[index];
			curr.score += 1;
		}
	}

	const result: number[] = [];

	for (const word of words) {
		let curr = root;
		let score = 0;

		for (const c of word) {
			const index = c.charCodeAt(0) - 97;
			curr = curr.children[index];
			score += curr.score;
		}

		result.push(score);
	}

	return result;
}

test('longestCommonPrefix', () => {
	expect(sumPrefixScores(['abc', 'ab', 'bc', 'b'])).toStrictEqual([5, 4, 3, 2]);
	expect(sumPrefixScores(['abcd'])).toStrictEqual([4]);
});
