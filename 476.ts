function findComplement(num: number): number {
	return Number.parseInt(
		num
			.toString(2)
			.split('')
			.map((c) => (c === '1' ? '0' : '1'))
			.join(''),
		2,
	);
}

test('findComplement', () => {
	expect(findComplement(5)).toBe(2);
	expect(findComplement(1)).toBe(0);
});
