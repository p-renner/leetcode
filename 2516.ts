function takeCharacters(s: string, k: number): number {
	const count = [0, 0, 0];

	for (const c of s) {
		count[c.charCodeAt(0) - 97]++;
	}

	if (Math.min(...count) < k) {
		return -1;
	}

	let max = Infinity;
	let left = 0;

	for (let right = 0; right < s.length; right++) {
		count[s.charCodeAt(right) - 97]--;

		while (Math.min(...count) < k) {
			count[s.charCodeAt(left) - 97]++;
			left++;
		}

		max = Math.min(max, s.length - (right - left + 1));
	}

	return max;
}

test('takeCharacters', () => {
	expect(takeCharacters('aabaaaacaabc', 2)).toBe(8);
	expect(takeCharacters('a', 1)).toBe(-1);
});
