function commonFactors(a: number, b: number): number {
	const min = Math.min(a, b);
	let factors = 1;

	for (let i = 2; i <= min; i++) {
		if (a % i == 0 && b % i == 0) {
			factors++;
		}
	}
	return factors;
}

test('commonFactors', () => {
	expect(commonFactors(12, 6)).toBe(4);
	expect(commonFactors(25, 30)).toBe(2);
});
