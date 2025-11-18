function isOneBitCharacter(bits: number[]): boolean {
	const n = bits.length;
	if (bits[n - 1] == 1) {
		return false;
	}

	let i = 0;

	while (i < n - 1) {
		i += bits[i] == 1 ? 2 : 1;
	}

	return i == n - 1;
}

test('isOneBitCharacter', () => {
	expect(isOneBitCharacter([1, 0, 0])).toBe(true);
	expect(isOneBitCharacter([1, 0, 0, 0])).toBe(true);
	expect(isOneBitCharacter([1, 1, 1, 0])).toBe(false);
	expect(isOneBitCharacter([1, 1, 1, 0, 0])).toBe(true);
});
