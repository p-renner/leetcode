function minLength(s: string): number {
	const sNew = s.split(/AB|CD/);
	if (sNew.length == 1) {
		return sNew.join('').length;
	}

	return minLength(sNew.join(''));
}

test('minLength', () => {
	expect(minLength('ABFCACDB')).toBe(2);
	expect(minLength('ACBBD')).toBe(5);
});
