function minimumDeletions(word: string, k: number): number {
	const freqMap = new Map<string, number>();

	for (const c of word) {
		freqMap.set(c, (freqMap.get(c) || 0) + 1);
	}

	const freqs = [...freqMap.values()];

	let res = Infinity;

	for (const curr of freqs) {
		let deleted = 0;

		for (const freq of freqs) {
			if (freq < curr) {
				deleted += freq;
			} else if (freq > curr) {
				deleted += Math.max(freq - curr - k, 0);
			}
		}

		res = Math.min(res, deleted);
	}

	return res;
}

test('minimumDeletions', () => {
	expect(minimumDeletions('aabcaba', 0)).toBe(3);
	expect(minimumDeletions('dabdcbdcdcd', 2)).toBe(2);
	expect(minimumDeletions('aaabaaa', 2)).toBe(1);
});
