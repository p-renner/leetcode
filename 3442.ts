function maxDifference(s: string): number {
	const freqArray = new Array(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		freqArray[s.charCodeAt(i) - 97] += 1;
	}

	let maxOdd = 0;
	let minEven = 101;

	for (const freq of freqArray) {
		if (freq == 0) {
			continue;
		} else if (freq % 2 == 1 && maxOdd < freq) {
			maxOdd = freq;
		} else if (freq % 2 == 0 && minEven > freq) {
			minEven = freq;
		}
	}

	return maxOdd - minEven;
}

test('maxDifference', () => {
	expect(maxDifference('aaaaabbc')).toBe(3);
	expect(maxDifference('abcabcab')).toBe(1);
});
