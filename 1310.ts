function xorQueries(arr: number[], queries: number[][]): number[] {
	const prefix = [0];
	arr.forEach((num, i) => (prefix[i] = prefix[i - 1] ^ num));

	return queries.map(([start, end]) => prefix[end] ^ prefix[start - 1]);
}

test('xorQueries', () => {
	expect(
		xorQueries(
			[1, 3, 4, 8],
			[
				[0, 1],
				[1, 2],
				[0, 3],
				[3, 3],
			],
		),
	).toStrictEqual([2, 7, 14, 8]);
	expect(
		xorQueries(
			[4, 8, 2, 10],
			[
				[2, 3],
				[1, 3],
				[0, 0],
				[0, 3],
			],
		),
	).toStrictEqual([8, 0, 4, 4]);
});
