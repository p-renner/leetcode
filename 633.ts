function judgeSquareSum(c: number): boolean {
	const factors = primeFactors(c);
	console.log(factors);

	for (const factor of factors.keys()) {
		if (factor % 4 == 3 && factors.get(factor)! % 2 !== 0) {
			return false;
		}
	}
	return true;
}

function primeFactors(n: number): Map<number, number> {
	const factors = new Map<number, number>();
	let divisor = 2;

	while (n >= 2) {
		if (n % divisor == 0) {
			factors.set(divisor, (factors.get(divisor) || 0) + 1);
			n = n / divisor;

			if (isPrime(n)) {
				factors.set(n, (factors.get(n) || 0) + 1);
				return factors;
			}
		} else {
			divisor++;
		}
	}
	return factors;
}

function isPrime(n: number): boolean {
	for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
		if (n % i === 0) return false;
	}
	return n > 1;
}

test('judgeSquareSum', () => {
	expect(judgeSquareSum(5)).toBe(true);
	expect(judgeSquareSum(3)).toBe(false);
	expect(judgeSquareSum(4)).toBe(true);
	expect(judgeSquareSum(2)).toBe(true);
	expect(judgeSquareSum(1)).toBe(true);
	expect(judgeSquareSum(0)).toBe(true);
	expect(judgeSquareSum(100000)).toBe(true);
	expect(judgeSquareSum(100001)).toBe(false);
});
