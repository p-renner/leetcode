function isPrime(n: number): boolean {
	for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
		if (n % i === 0) return false;
	}
	return n > 1;
}

function fact(n: number): bigint {
	let res = BigInt(1);

	for (let i = 1; i <= n; i++) {
		res *= BigInt(i);
	}

	return res % BigInt(1000000007);
}

function numPrimeArrangements(n: number): number {
	let primeCount = 0;

	for (let i = 1; i <= n; i++) {
		if (isPrime(i)) {
			primeCount++;
		}
	}

	const primeFactorial = fact(primeCount);
	const nonPrimeFactorial = fact(n - primeCount);

	return Number((primeFactorial * nonPrimeFactorial) % BigInt(1000000007));
}

test('numPrimeArrangements', () => {
	expect(numPrimeArrangements(5)).toBe(12);
	expect(numPrimeArrangements(100)).toBe(682289015);
});
