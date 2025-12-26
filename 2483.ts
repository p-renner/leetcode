function bestClosingTime(customers: string): number {
	let prefix = 0;
	let postfix = customers.split('').filter((c) => c == 'Y').length;

	if (postfix == customers.length || postfix == 0) {
		return postfix;
	}

	let min = prefix + postfix;
	let minDay = 0;

	for (let i = 0; i < customers.length; i++) {
		if (customers[i] == 'Y') {
			postfix--;
		} else {
			prefix++;
		}

		if (prefix + postfix < min) {
			min = prefix + postfix;
			minDay = i + 1;
		}
	}

	return minDay;
}

describe('bestClosingTime', () => {
	test('case 1', () => {
		expect(bestClosingTime('YYNY')).toBe(2);
	});
	test('case 2', () => {
		expect(bestClosingTime('NNNNN')).toBe(0);
	});
	test('case 3', () => {
		expect(bestClosingTime('YYYY')).toBe(4);
	});
});
