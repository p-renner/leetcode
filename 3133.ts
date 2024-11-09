function minEnd(n: number, x: number): number {
	const bin = x.toString(2).split('');
	const zeros = (n - 1).toString(2).split('');

	for (let i = bin.length - 1; i >= 0; i--) {
		if (zeros.length === 0) {
			break;
		}

		if (bin[i] === '0') {
			bin[i] = zeros.pop();
		}
	}

	return parseInt(zeros.concat(bin).join(''), 2);
}

test('minEnd', () => {
	expect(minEnd(3, 4)).toBe(6);
	expect(minEnd(2, 7)).toBe(15);
});
