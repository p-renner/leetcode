function numberOfAlternatingGroups(colors: number[]): number {
	let count = 0;

	for (let i = 0; i < colors.length; i++) {
		if (
			colors[(i + 1) % colors.length] !== colors[i] &&
			colors[(i + 1) % colors.length] !== colors[(i + 2) % colors.length]
		) {
			count++;
		}
	}

	return count;
}

test('numberOfAlternatingGroups', () => {
	expect(numberOfAlternatingGroups([1, 1, 1])).toBe(0);
	expect(numberOfAlternatingGroups([0, 1, 0, 0, 1])).toBe(3);
});
