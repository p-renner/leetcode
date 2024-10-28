function countSegments(s: string): number {
	return s.split(' ').filter((w) => w).length;
}

test('countSegments', () => {
	expect(countSegments('Hello, my name is John')).toBe(5);
	expect(countSegments('Hello')).toBe(1);
	expect(countSegments("love live! mu'sic forever")).toBe(4);
	expect(countSegments('    ')).toBe(0);
});
