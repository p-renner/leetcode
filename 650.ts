function minSteps(n: number): number {
	return primeFactors(n).reduce((a, b) => a + b, 0);
}

function primeFactors(n: number) {
	const factors: number[] = [];
	let divisor = 2;

	while (n >= 2) {
		if (n % divisor == 0) {
			factors.push(divisor);
			n = n / divisor;
		} else {
			divisor++;
		}
	}
	return factors;
}

test('minSteps', () => {
	expect(minSteps(3)).toBe(3);
	expect(minSteps(1)).toBe(0);
	expect(minSteps(2)).toBe(2);
	expect(minSteps(4)).toBe(4);
	expect(minSteps(22)).toBe(13);
	expect(minSteps(15)).toBe(8);
	expect(minSteps(75)).toBe(13);
	expect(minSteps(1000)).toBe(21);
});
