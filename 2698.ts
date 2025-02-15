function punishmentNumber(n: number): number {
	const sumSplittableNumbers = [
		1, 9, 10, 36, 45, 55, 82, 91, 99, 100, 235, 297, 369, 370, 379, 414, 657, 675, 703, 756, 792, 909, 918, 945,
		964, 990, 991, 999, 1000,
	];

	const sumSplittableMap = [
		1, 81, 100, 1296, 2025, 3025, 6724, 8281, 9801, 10000, 55225, 88209, 136161, 136900, 143641, 171396, 431649,
		455625, 494209, 571536, 627264, 826281, 842724, 893025, 929296, 980100, 982081, 998001, 1000000,
	];

	return sumSplittableNumbers.filter((num) => num <= n).reduce((acc, _, i) => acc + sumSplittableMap[i], 0);
}

test('punishmentNumber', () => {
	expect(punishmentNumber(10)).toBe(182);
});
