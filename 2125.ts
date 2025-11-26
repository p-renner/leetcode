function numberOfBeams(bank: string[]): number {
	const int = bank.map((s) => s.split('').reduce((acc, c) => acc + (c == '0' ? 0 : 1), 0)).filter((i) => i != 0);
	let res = 0;

	for (let i = 1; i < int.length; i++) {
		res += int[i - 1] * int[i];
	}

	return res;
}

test('numberOfBeams', () => {
	expect(numberOfBeams(['011001', '000000', '010100', '001000'])).toBe(8);
	expect(numberOfBeams(['000', '111', '000'])).toBe(0);
});
