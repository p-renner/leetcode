function maxUniqueSplit(s: string): number {
	function backtrack(s: string, seen: Set<string>): number {
		let max = -1;

		for (let i = 1; i < s.length; i++) {
			let word = s.slice(0, i);

			if (seen.has(word)) {
				continue;
			}

			seen.add(word);
			const res = backtrack(s.slice(i), seen);
			seen.delete(word);

			if (res == -1) {
				continue;
			}

			max = Math.max(max, res + 1);
		}

		if (!seen.has(s)) {
			return Math.max(max, 1);
		}

		return max;
	}

	return backtrack(s, new Set());
}

test('maxUniqueSplit', () => {
	expect(maxUniqueSplit('abc')).toBe(3);
	expect(maxUniqueSplit('ababccc')).toBe(5);
	expect(maxUniqueSplit('aba')).toBe(2);
	expect(maxUniqueSplit('aa')).toBe(1);
	expect(maxUniqueSplit('wwwzfvedwfvhsww')).toBe(11);
});
