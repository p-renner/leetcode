const memo = new Map<number, number>();
memo.set(1, 1);
memo.set(2, 2);
memo.set(3, 5);

function numTilings(n: number): number {
	if (memo.has(n)) {
		return memo.get(n)!;
	}

	const res = (2 * numTilings(n - 1) + numTilings(n - 3)) % 1_000_000_007;
	memo.set(n, res);

	return res;
}

test('numTilings', () => {
	expect(numTilings(2)).toBe(2);
	expect(numTilings(5)).toBe(24);
	expect(numTilings(30)).toBe(312342182);
});
