function totalMoney(n: number): number {
	let mon = 0;
	let last = 0;
	let res = 0;

	for (let i = 0; i < n; i++) {
		if (i % 7 == 0) {
			mon++;
			last = mon;
			res += mon;
			continue;
		}

		last++;
		res += last;
	}

	return res;
}

test('totalMoney', () => {
	expect(totalMoney(4)).toBe(10);
	expect(totalMoney(10)).toBe(37);
	expect(totalMoney(20)).toBe(96);
});
