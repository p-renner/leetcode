function checkPowersOfThree(n: number): boolean {
	const pows = [1];

	for (let i = 1; i <= 16; i++) {
		pows.unshift(pows[0] * 3);
	}

	while (pows.length > 0) {
		if (pows[0] == n) {
			return true;
		} else if (pows[0] < n) {
			n -= pows[0];
		}

		pows.shift();
	}

	return n === 0;
}

test('checkPowersOfThree', () => {
	expect(checkPowersOfThree(12)).toBe(true);
	expect(checkPowersOfThree(91)).toBe(true);
	expect(checkPowersOfThree(21)).toBe(false);
});
