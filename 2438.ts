function productQueries(n: number, queries: number[][]): number[] {
	const pows: number[] = [];
	n.toString(2)
		.split('')
		.reverse()
		.forEach((bit, i) => {
			if (bit != '1') {
				return;
			}
			pows.push(1 << i);
		});

	const res: number[] = [];

	queries.forEach(([start, end]) => {
		let prod = 1;

		for (let i = start; i <= end; i++) {
			prod = (prod * pows[i]) % 1000000007;
		}

		res.push(prod);
	});

	return res;
}

test('productQueries', () => {
	expect(
		productQueries(15, [
			[0, 1],
			[2, 2],
			[0, 3],
		]),
	).toStrictEqual([2, 4, 64]);
	expect(productQueries(2, [[0, 0]])).toStrictEqual([2]);
});
