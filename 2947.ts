function beautifulSubstrings(s: string, k: number): number {
	let sum = 0;
	const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

	for (let i = 0; i < s.length; i++) {
		let count = [0, 0];

		for (let j = i; j < s.length; j++) {
			if (vowels.has(s[j])) {
				count[0]++;
			} else {
				count[1]++;
			}

			if (count[0] == count[1] && (count[0] * count[1]) % k == 0) {
				sum++;
			}
		}
	}

	return sum;
}

test('beautifulSubstrings', () => {
	expect(beautifulSubstrings('baeyh', 2)).toBe(2);
	expect(beautifulSubstrings('abba', 1)).toBe(3);
	expect(beautifulSubstrings('bcdf', 0)).toBe(0);
});
