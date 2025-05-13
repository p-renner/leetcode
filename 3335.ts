function lengthAfterTransformations(s: string, t: number): number {
	const MOD = 1000000007;
	let freqMap = new Array(26).fill(0);

	for (const char of s) {
		freqMap[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
	}

	while (t > 0) {
		const newFreq = new Array(26).fill(0);

		newFreq[0] = freqMap[25];
		newFreq[1] = (freqMap[0] + freqMap[25]) % MOD;

		for (let i = 2; i < freqMap.length; i++) {
			newFreq[i] = freqMap[i - 1];
		}

		freqMap = newFreq;
		t--;
	}

	return [...freqMap.values()].reduce((acc, curr) => (acc + curr) % MOD, 0);
}

test('lengthAfterTransformations', () => {
	expect(lengthAfterTransformations('abcyy', 2)).toBe(7);
	expect(lengthAfterTransformations('azbk', 1)).toBe(5);
	expect(lengthAfterTransformations('jqktcurgdvlibczdsvnsg', 7517)).toBe(79033769);
});
