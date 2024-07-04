function maxVowels(s: string, k: number): number {
	const pos = new Set(['a', 'e', 'i', 'o', 'u']);
	let vowels = s
		.substring(0, k)
		.split('')
		.reduce((prev, curr) => prev + (pos.has(curr) ? 1 : 0), 0);
	let max = vowels;

	for (let i = k; i < s.length; i++) {
		if (pos.has(s[i - k])) {
			vowels--;
		}
		if (pos.has(s[i])) {
			vowels++;
		}
		max = Math.max(vowels, max);
	}

	return max;
}

test('maxVowels', () => {
	expect(maxVowels('abciiidef', 3)).toBe(3);
});
