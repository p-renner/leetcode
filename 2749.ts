function makeTheIntegerZero(num1: number, num2: number): number {
	if (num1 < num2) {
		return -1;
	}

	for (let i = 1; i <= 60; i++) {
		const pow = num1 - num2 * i;

		if (pow > 0 && pow >= i && countBinaryOnes(pow) <= i) {
			return i;
		}
	}

	return -1;
}

function countBinaryOnes(num: number): number {
	return num
		.toString(2)
		.split('')
		.filter((c) => c == '1').length;
}

test('makeTheIntegerZero', () => {
	expect(makeTheIntegerZero(3, -2)).toBe(3);
	expect(makeTheIntegerZero(5, 7)).toBe(-1);
	expect(makeTheIntegerZero(52, -12)).toBe(1);
	expect(makeTheIntegerZero(3, -75)).toBe(6);
	expect(makeTheIntegerZero(16, 10)).toBe(-1);
	expect(makeTheIntegerZero(85, 42)).toBe(-1);
});
