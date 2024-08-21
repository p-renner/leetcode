function strangePrinter(s: string): number {
	const prints: number[][] = Array.from({ length: s.length }, () => []);

	function turns(start: number, end: number): number {
		if (start > end) {
			return 0;
		}

		if (prints[start] && prints[start][end]) {
			return prints[start][end];
		}

		let min = 1 + turns(start + 1, end);

		for (let i = start + 1; i <= end; i++) {
			if (s[i] == s[start]) {
				min = Math.min(min, turns(start, i - 1) + turns(i + 1, end));
			}
		}

		prints[start][end] = min;
		return min;
	}
	return turns(0, s.length - 1);
}

test('strangePrinter', () => {
	expect(strangePrinter('aaabbb')).toBe(2);
	expect(strangePrinter('aba')).toBe(2);
});
