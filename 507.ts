function checkPerfectNumber(num: number): boolean {
	const divisors = [];

	for (let i = 1; i <= num / 2; i++) {
		if (num % i === 0) {
			divisors.push(i);
		}
	}

	return divisors.reduce((acc, cur) => acc + cur, 0) === num;
}

test('checkPerfectNumber', () => {
	expect(checkPerfectNumber(28)).toBe(true);
	expect(checkPerfectNumber(7)).toBe(false);
	expect(checkPerfectNumber(6)).toBe(true);
});
