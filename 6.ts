function convert(s: string, numRows: number): string {
	let i = 0;
	let arr: string[][] = Array.from({ length: numRows }, () => new Array());

	while (i < s.length) {
		for (let j = 0; j < numRows; i++, j++) {
			arr[j].push(s[i]);
		}

		for (let j = numRows - 2; j > 0; i++, j--) {
			arr[j].push(s[i]);
		}
	}

	return arr.map((a) => a.join('')).join('');
}

test('fist test', () => {
	expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
	expect(convert('PAYPALISHIRING', 2)).toBe('PYAIHRNAPLSIIG');
	expect(convert('PAYPALISHIRING', 1)).toBe('PAYPALISHIRING');
});
