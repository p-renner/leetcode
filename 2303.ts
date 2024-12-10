function calculateTax(brackets: number[][], income: number): number {
	let tax = 0;
	let taxed = 0;

	while (income - taxed > 0) {
		const [upper, percent] = brackets.shift();
		const taxable = Math.min(income - taxed, upper - taxed);

		taxed += taxable;
		tax += taxable * (percent / 100);
	}

	return tax;
}

test('calculateTax', () => {
	expect(
		calculateTax(
			[
				[3, 50],
				[7, 10],
				[12, 25],
			],
			10,
		),
	).toBe(2.65);
	expect(
		calculateTax(
			[
				[1, 0],
				[4, 25],
				[5, 50],
			],
			2,
		),
	).toBe(0.25);
	expect(calculateTax([[2, 50]], 0)).toBe(0);
});
