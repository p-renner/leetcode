function getDescentPeriods(prices: number[]): number {
	let res = 1;
	let add = 1;

	for (let i = 1; i < prices.length; i++) {
		add = prices[i - 1] == prices[i] + 1 ? add + 1 : 1;
		res += add;
	}

	return res;
}

describe('getDescentPeriods', () => {
	test('case 1', () => {
		expect(getDescentPeriods([3, 2, 1, 4])).toBe(7);
	});

	test('case 2', () => {
		expect(getDescentPeriods([8, 6, 7, 7])).toBe(4);
	});

	test('case 3', () => {
		expect(getDescentPeriods([1])).toBe(1);
	});
});
