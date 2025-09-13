function maxFreqSum(s: string): number {
	const freqMap = new Map<string, number>();
	const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

	const max = [0, 0];

	for (const c of s) {
		let freq = (freqMap.get(c) || 0) + 1;
		freqMap.set(c, freq);

		if (vowels.has(c)) {
			max[0] = Math.max(max[0], freq);
		} else {
			max[1] = Math.max(max[1], freq);
		}
	}

	return max[0] + max[1];
}

test('maxFreqSum', () => {
	expect(maxFreqSum('pps')).toBe(2);
});
