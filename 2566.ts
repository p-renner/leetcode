function minMaxDifference(num: number): number {
	const numArray = num.toString().split('');

	let firstNonNine = numArray.find((num) => num != '9');
	let firstNonZero = numArray.find((num) => num != '0');

	const max = Number.parseInt(numArray.map((num) => (num == firstNonNine ? '9' : num)).join(''));
	const min = Number.parseInt(numArray.map((num) => (num == firstNonZero ? '0' : num)).join(''));

	return max - min;
}

test('minMaxDifference', () => {
	expect(minMaxDifference(11891)).toBe(99009);
	expect(minMaxDifference(90)).toBe(99);
});
