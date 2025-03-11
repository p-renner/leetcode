function numberOfSubstrings(s: string): number {
	const counts = [0, 0, 0];
	let result = 0;
	let left = 0;
	let right = 0;

	while (right < s.length) {
		const c = s.charCodeAt(right) - 97;
		counts[c]++;

		while (counts.every((count) => count > 0)) {
			result += s.length - right;
			counts[s.charCodeAt(left) - 97]--;
			left++;
		}

		right++;
	}

	return result;
}

test('numberOfSubstrings', () => {
	expect(numberOfSubstrings('abcabc')).toBe(10);
	expect(numberOfSubstrings('aaacb')).toBe(3);
	expect(numberOfSubstrings('abc')).toBe(1);
});
