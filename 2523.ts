function closestPrimes(left: number, right: number): number[] {
	const primes: number[] = [];
	for (let i = left; i <= right; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}
	}

	if (primes.length < 2) {
		return [-1, -1];
	}

	let minDiff = Infinity;
	let minPair: number[] = [];

	for (let i = 0; i < primes.length - 1; i++) {
		const diff = primes[i + 1] - primes[i];
		if (diff < minDiff) {
			minDiff = diff;
			minPair = [primes[i], primes[i + 1]];
		}
	}

	return minPair;
}

function isPrime(n: number): boolean {
	for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
		if (n % i === 0) return false;
	}
	return n > 1;
}
