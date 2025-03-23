function countOfSubstrings(word: string, k: number): number {
	const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
	const vowelCount = { a: 0, e: 0, i: 0, o: 0, u: 0 };
	let consonants = 0;
	let res = 0;
	let p1 = 0;

	for (let p2 = 0; p2 < word.length; p2++) {
		const curr = word[p2];
		if (!vowels.has(curr)) {
			consonants++;
		} else {
			vowelCount[curr] += 1;
		}

		while (consonants > k && p1 != p2) {
			const char = word[p1];
			p1++;

			if (!vowels.has(char)) {
				consonants--;
				continue;
			}

			vowelCount[char]--;
		}

		if (
			consonants === k &&
			vowelCount.a > 0 &&
			vowelCount.e > 0 &&
			vowelCount.i > 0 &&
			vowelCount.o > 0 &&
			vowelCount.u > 0
		) {
			res++;

			const current = new Map<string, number>();

			for (let i = p1; i < p2; i++) {
				if (!vowels.has(word[i])) {
					break;
				}

				current.set(word[i], (current.get(word[i]) || 0) + 1);
				const count = vowelCount[word[i]] - current.get(word[i]);

				if (count == 0) {
					break;
				}

				res++;
			}
		}
	}

	return res;
}

test('countOfSubstrings', () => {
	expect(countOfSubstrings('aeioqq', 1)).toBe(0);
	expect(countOfSubstrings('aeiou', 0)).toBe(1);
	expect(countOfSubstrings('ieaouqqieaouqq', 1)).toBe(3);
	expect(countOfSubstrings('iqeaouqi', 2)).toBe(3);
});
