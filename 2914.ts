function minChanges(s: string): number {
	return (s.match(/.{2}/g) || new Array()).reduce((acc, cur) => acc + (cur == '10' || cur == '01' ? 1 : 0), 0);
}

test('minChanges', () => {
	expect(minChanges('1001')).toBe(2);
	expect(minChanges('10')).toBe(1);
	expect(minChanges('0000')).toBe(0);
	expect(minChanges('')).toBe(0);
});
