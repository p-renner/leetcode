function clearStars(s: string): string {
	const count: number[][] = Array.from({ length: 26 }, () => []);
	const keep = new Set();

	for (let i = 0; i < s.length; i++) {
		if (s[i] !== '*') {
			count[s.charCodeAt(i) - 97].push(i);
			keep.add(i);
		} else {
			for (let j = 0; j < 26; j++) {
				if (count[j].length == 0) {
					continue;
				}

				const last = count[j].pop()!;
				keep.delete(last);
				break;
			}
		}
	}

	return s
		.split('')
		.filter((_, i) => keep.has(i))
		.join('');
}

test('clearStars', () => {
	expect(clearStars('aaba*')).toBe('aab');
	expect(clearStars('abc')).toBe('abc');
});
