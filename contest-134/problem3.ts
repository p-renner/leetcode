function numberOfAlternatingGroups(colors: number[], k: number): number {
	let count = 0;

	const altI: number[] = [];
	let prev = colors[colors.length - 1];
	for (let i = 0; i < colors.length; i++) {
		if (prev != colors[i]) {
			prev = colors[i];
			continue;
		}
		prev = colors[i];
		altI.push(i);
	}

	const len = colors.length;

	if (altI.length == 0) {
		return len;
	}

	for (let i = 0; i < altI.length; i++) {
		let currLen = 0;
		if (altI[i + 1]) {
			currLen = altI[i + 1] - altI[i];
		} else {
			currLen = len + altI[0] - 1 - altI[i] + 1;
		}

		if (currLen < k) {
			continue;
		}

		count += currLen - k + 1;
	}

	return count;
}

test('numberOfAlternatingGroups', () => {
	expect(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3)).toBe(3);
	expect(numberOfAlternatingGroups([0, 1, 0, 0, 1, 0, 1], 6)).toBe(2);
	expect(numberOfAlternatingGroups([1, 1, 0, 1], 4)).toBe(0);
	expect(numberOfAlternatingGroups([0, 0, 1, 1], 3)).toBe(0);
	expect(numberOfAlternatingGroups([0, 1, 0, 1], 3)).toBe(4);
});
