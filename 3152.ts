function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
	const prefix: number[] = [];
	prefix[0] = 0;

	for (let i = 1; i < nums.length; i++) {
		const parity = nums[i] % 2 == nums[i - 1] % 2;
		prefix[i] = parity ? prefix[i - 1] + 1 : prefix[i - 1];
	}

	return queries.map(([start, end]) => prefix[start] - prefix[end] == 0);
}

test('isArraySpecial', () => {
	expect(isArraySpecial([3, 4, 1, 2, 6], [[0, 4]])).toStrictEqual([false]);
	expect(
		isArraySpecial(
			[4, 3, 1, 6],
			[
				[0, 2],
				[2, 3],
			],
		),
	).toStrictEqual([false, true]);
});
