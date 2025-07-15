function findDiagonalOrder(nums: number[][]): number[] {
	const tuples = nums.flatMap((arr, i) => {
		return arr.map((val, j) => {
			return { sum: i + j, i: i, val: val };
		});
	});

	tuples.sort((a, b) => {
		if (a.sum == b.sum) {
			return b.i - a.i;
		}

		return a.sum - b.sum;
	});

	return tuples.map((tuple) => tuple.val);
}

test('findDiagonalOrder', () => {
	expect(
		findDiagonalOrder([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		]),
	).toStrictEqual([1, 4, 2, 7, 5, 3, 8, 6, 9]);
	expect(findDiagonalOrder([[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]])).toStrictEqual([
		1, 6, 2, 8, 7, 3, 9, 4, 12, 10, 5, 13, 11, 14, 15, 16,
	]);
});
