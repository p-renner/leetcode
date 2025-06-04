function answerString(word: string, numFriends: number): string {
	if (numFriends == 1) {
		return word;
	}

	let resLen = word.length - numFriends + 1;
	let res = word.slice(0, resLen);

	for (let i = 1; i < word.length; i++) {
		const answer = word.slice(i, Math.min(i + resLen, word.length));
		res = answer > res ? answer : res;
	}

	return res;
}

test('answerString', () => {
	expect(answerString('dbca', 2)).toBe('dbc');
	expect(answerString('gggg', 4)).toBe('g');
	expect(answerString('aann', 2)).toBe('nn');
});
