function countPrimes(n: number): number {
	let prime = Array.from({ length: n - 2 }, () => true);

	for (let p = 2; p * p < n; p++) {
		for (let i = p * p; i < n; i += p) {
			prime[i - 2] = false;
		}
	}

	return prime.reduce((acc, curr) => acc + (curr ? 1 : 0), 0);
}

test('countPrimes', () => {
	expect(countPrimes(10)).toBe(4);
	expect(countPrimes(0)).toBe(0);
	expect(countPrimes(1)).toBe(0);
	expect(countPrimes(2)).toBe(0);
});
