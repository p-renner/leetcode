function minimumCost(source: string, target: string, original: string[], changed: string[], cost: number[]): number {
	const matrix: number[][] = Array.from({ length: 26 }, () => Array(26).fill(Infinity));

	original.forEach((c, i) => {
		const costI = cost[i];
		const from = c.charCodeAt(0) - 97;
		const to = changed[i].charCodeAt(0) - 97;

		matrix[from][to] = Math.min(matrix[from][to], costI);
	});

	for (let k = 0; k < 26; k++) {
		for (let i = 0; i < 26; i++) {
			for (let j = 0; j < 26; j++) {
				matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
			}
		}
	}

	const res = source.split('').reduce((prev, curr, i) => {
		const from = curr.charCodeAt(0) - 97;
		const to = target.charCodeAt(i) - 97;

		if (from == to) {
			return prev;
		}

		return (prev += matrix[from][to]);
	}, 0);

	return res == Infinity ? -1 : res;
}

test('minimumCost', () => {
	expect(
		minimumCost(
			'abcd',
			'acbe',
			['a', 'b', 'c', 'c', 'e', 'd'],
			['b', 'c', 'b', 'e', 'b', 'e'],
			[2, 5, 5, 1, 2, 20],
		),
	).toBe(28);
	expect(minimumCost('aaaa', 'bbbb', ['a', 'c'], ['c', 'b'], [1, 2])).toBe(12);
	expect(minimumCost('abcd', 'abce', ['a'], ['e'], [10000])).toBe(-1);
});
