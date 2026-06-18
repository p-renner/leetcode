function mapWordWeights(words: string[], weights: number[]): string {
	let res = '';

	for (const word of words) {
		const weight = wordToWeight(word);
		res += String.fromCharCode(25 - weight + 97);
	}

	return res;

	function wordToWeight(word: string): number {
		return (
			word.split('').reduce((prev, _, i) => {
				return prev + weights[word.charCodeAt(i) - 97];
			}, 0) % 26
		);
	}
}

test('mapWordWeights', () => {
	expect(
		mapWordWeights(
			['abcd', 'def', 'xyz'],
			[5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7, 7, 2],
		),
	).toBe('rij');
	expect(
		mapWordWeights(['a', 'b', 'c'], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
	).toBe('yyy');
	expect(
		mapWordWeights(['abcd'], [7, 5, 3, 4, 3, 5, 4, 9, 4, 2, 2, 7, 10, 2, 5, 10, 6, 1, 2, 2, 4, 1, 3, 4, 4, 5]),
	).toBe('g');
});
