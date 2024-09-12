function countConsistentStrings(allowed: string, words: string[]): number {
	const a = new Set(allowed.split(''));
	let ans = 0;

	for (const word of words) {
		if (Array.from(new Set(word.split(''))).every((c) => a.has(c))) {
			ans++;
		}
	}

	return ans;
}

test('countConsistentStrings', () => {
	expect(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'])).toBe(2);
	expect(countConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'])).toBe(7);
	expect(countConsistentStrings('cad', ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'])).toBe(4);
});
