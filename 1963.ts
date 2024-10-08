function minSwaps(s: string): number {
	let swaps = 0;
	let brackets = [0, 0];

	for (let i = 0; i < s.length; i++) {
		if (s[i] == '[') {
			brackets[0]++;
			continue;
		}

		if (brackets[1] == brackets[0]) {
			swaps++;
			brackets[0]++;
			continue;
		}

		brackets[1]++;
	}

	return swaps;
}

test('minSwaps', () => {
	expect(minSwaps('][][')).toBe(1);
	expect(minSwaps(']]][[[')).toBe(2);
	expect(minSwaps('[]')).toBe(0);
});
