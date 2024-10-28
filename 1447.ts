function simplifiedFractions(n: number): string[] {
	if (n < 2) {
		return [];
	}

	const res = simplifiedFractions(n - 1);

	for (let i = 1; i < n; i++) {
		if (gcd(i, n) != 1) {
			continue;
		}

		res.push(i + '/' + n);
	}

	return res;
}

function gcd(a: number, b: number) {
	if (!b) {
		return a;
	}

	return gcd(b, a % b);
}

test('simplifiedFractions', () => {
	expect(simplifiedFractions(2)).toEqual(['1/2']);
	expect(simplifiedFractions(3)).toEqual(['1/2', '1/3', '2/3']);
	expect(simplifiedFractions(4)).toEqual(['1/2', '1/3', '2/3', '1/4', '3/4']);
});
