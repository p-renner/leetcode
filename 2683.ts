function doesValidArrayExist(derived: number[]): boolean {
	return derived.reduce((acc, curr) => acc ^ curr, 0) == 0;
}

test('doesValidArrayExist', () => {
	expect(doesValidArrayExist([1, 1, 0])).toBe(true);
	expect(doesValidArrayExist([1, 1])).toBe(true);
	expect(doesValidArrayExist([1, 0])).toBe(false);
});
