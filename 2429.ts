function minimizeXor(num1: number, num2: number): number {
	const num1Bits = getBitcount(num1);
	const num2Bits = getBitcount(num2);

	if (num1Bits == num2Bits) {
		return num1;
	}

	if (num1Bits < num2Bits) {
		const res = num1.toString(2).split('');
		let toAdd = num2Bits - num1Bits;

		for (let i = res.length - 1; i >= 0; i--) {
			if (res[i] == '1') {
				continue;
			}

			res[i] = '1';
			toAdd--;

			if (toAdd == 0) {
				break;
			}
		}

		return parseInt('1'.repeat(toAdd) + res.join(''), 2);
	}

	const res = num1.toString(2).split('');
	let toAdd = num1Bits - num2Bits;

	for (let i = res.length - 1; i >= 0; i--) {
		if (res[i] == '0') {
			continue;
		}

		res[i] = '0';
		toAdd--;

		if (toAdd == 0) {
			break;
		}
	}

	return parseInt(res.join(''), 2);
}

function getBitcount(num: number): number {
	return num
		.toString(2)
		.split('')
		.filter((c) => c == '1').length;
}

test('minimizeXor', () => {
	expect(minimizeXor(3, 5)).toBe(3);
	expect(minimizeXor(1, 12)).toBe(3);
	expect(minimizeXor(12, 1)).toBe(8);
});
