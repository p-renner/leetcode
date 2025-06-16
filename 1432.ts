function maxDiff(num: number): number {
	const numArray = num.toString().split('');
	const startsWithOne = numArray[0] == '1';

	const firstMax = numArray.find((num) => num != '9');
	const firstMin = numArray.find((num) => (startsWithOne ? num != '0' && num != '1' : num != '0'));

	const max = Number.parseInt(numArray.map((num) => (num == firstMax ? 9 : num)).join(''));
	const min = Number.parseInt(numArray.map((num) => (num == firstMin ? (startsWithOne ? 0 : 1) : num)).join(''));

	return max - min;
}

test('maxDiff', () => {
	expect(maxDiff(555)).toBe(888);
	expect(maxDiff(9)).toBe(8);
	expect(maxDiff(123456)).toBe(820000);
});
