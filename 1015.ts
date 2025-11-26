function smallestRepunitDivByK(k: number): number {
	const seen = new Set<number>();
	let remainder = 1 % k;
	let len = 1;

	while (remainder != 0) {
		if (seen.has(remainder)) {
			return -1;
		}

		seen.add(remainder);
		remainder = (remainder * 10 + 1) % k;
		len++;
	}

	return len;
}

test('smallestRepunitDivByK', () => {
	expect(smallestRepunitDivByK(1)).toBe(1);
	expect(smallestRepunitDivByK(2)).toBe(-1);
	expect(smallestRepunitDivByK(3)).toBe(3);
	expect(smallestRepunitDivByK(4)).toBe(-1);
	expect(smallestRepunitDivByK(5)).toBe(-1);
	expect(smallestRepunitDivByK(6)).toBe(-1);
	expect(smallestRepunitDivByK(7)).toBe(6);
	expect(smallestRepunitDivByK(8)).toBe(-1);
	expect(smallestRepunitDivByK(9)).toBe(9);
	expect(smallestRepunitDivByK(10)).toBe(-1);
	expect(smallestRepunitDivByK(11)).toBe(2);
	expect(smallestRepunitDivByK(12)).toBe(-1);
	expect(smallestRepunitDivByK(13)).toBe(6);
	expect(smallestRepunitDivByK(14)).toBe(-1);
	expect(smallestRepunitDivByK(15)).toBe(-1);
});
