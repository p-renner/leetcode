function minimumPushes(word: string): number {
	const freqMap = new Array(26).fill(0);
	for (let i = 0; i < word.length; i++) {
		freqMap[word.charCodeAt(i) - 97] += 1;
	}

	return freqMap
		.filter((count) => count > 0)
		.sort((a, b) => b - a)
		.reduce((acc, cur, i) => acc + cur * Math.ceil((i + 1) / 8), 0);
}

test('minimumPushes', () => {
	expect(minimumPushes('abcde')).toBe(5);
	expect(minimumPushes('xyzxyzxyzxyz')).toBe(12);
	expect(minimumPushes('aabbccddeeffgghhiiiiii')).toBe(24);
});
