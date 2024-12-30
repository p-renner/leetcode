function removeDigit(number: string, digit: string): string {
	for (let i = 0; i < number.length; i++) {
		if (number[i] != digit) {
			continue;
		}

		if (!number[i + 1]) {
			return number.slice(0, number.length - 1);
		}

		if (Number.parseInt(number[i + 1]) <= Number.parseInt(number[i])) {
			continue;
		}

		return number.slice(0, i) + number.slice(i + 1);
	}

	const last = number.lastIndexOf(digit);
	return number.slice(0, last) + number.slice(last + 1);
}

test('removeDigit', () => {
	expect(removeDigit('123', '3')).toBe('12');
	expect(removeDigit('1231', '1')).toBe('231');
	expect(removeDigit('551', '5')).toBe('51');
	expect(removeDigit('133235', '3')).toBe('13325');
});
