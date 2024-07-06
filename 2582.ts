function passThePillow(n: number, time: number): number {
	const red = (time % ((n - 1) * 2)) + 1;
	return red <= n ? red : n - (red - n);
}

test('passThePillow', () => {
	expect(passThePillow(4, 5)).toBe(2);
	expect(passThePillow(4, 4)).toBe(3);
	expect(passThePillow(3, 2)).toBe(3);
});
