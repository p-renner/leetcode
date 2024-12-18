function finalPrices(prices: number[]): number[] {
	const prices2 = [...prices];
	return prices.map((price) => {
		prices2.shift();
		return price - (prices2.find((p) => p <= price) || 0);
	});
}

test('finalPrice', () => {
	expect(finalPrices([8, 4, 6, 2, 3])).toStrictEqual([4, 2, 4, 2, 3]);
	expect(finalPrices([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
	expect(finalPrices([10, 1, 1, 6])).toStrictEqual([9, 0, 1, 6]);
});
