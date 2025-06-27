function longestSubsequenceRepeatedK(s: string, k: number): string {
	const map = new Map<string, number>();

	for (const char of s) {
		map.set(char, (map.get(char) || 0) + 1);
	}

	const candidate = [...map.keys()]
		.filter((key) => map.get(key) >= k)
		.sort()
		.reverse();

	const subsequences: string[] = [...candidate];
	let res = '';

	while (subsequences.length > 0) {
		const curr = subsequences.shift()!;

		if (curr.length > res.length) {
			res = curr;
		}

		for (const c of candidate) {
			const next = curr + c;

			if (subsequenceMatchesK(s, next, k)) {
				subsequences.push(next);
			}
		}
	}

	return res;
}

function subsequenceMatchesK(s: string, pattern: string, k: number): boolean {
	let i = 0;
	let matched = 0;

	for (const c of s) {
		if (c !== pattern[i]) {
			continue;
		}

		i++;

		if (i !== pattern.length) {
			continue;
		}

		i = 0;
		matched++;

		if (matched === k) {
			return true;
		}
	}

	return false;
}

test('longestSubsequenceRepeatedK', () => {
	expect(longestSubsequenceRepeatedK('letsleetcode', 2)).toBe('let');
	expect(longestSubsequenceRepeatedK('bb', 2)).toBe('b');
	expect(longestSubsequenceRepeatedK('ab', 2)).toBe('');
});
