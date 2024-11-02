function isCircularSentence(sentence: string): boolean {
	return sentence.split(' ').every((curr, i, arr) => {
		return curr[curr.length - 1] == arr[(i + 1) % arr.length][0];
	});
}

test('isCircularSentence', () => {
	expect(isCircularSentence('leetcode exercises sound delightful')).toBe(true);
	expect(isCircularSentence('eetcode')).toBe(true);
	expect(isCircularSentence('Leetcode is cool')).toBe(false);
});
