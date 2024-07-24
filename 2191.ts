function sortJumbled(mapping: number[], nums: number[]): number[] {
	const jumbled = nums.map((num) =>
		Number.parseInt(
			String(num)
				.split('')
				.map((num) => mapping[num])
				.join(''),
		),
	);

	return nums
		.map((_, i) => i)
		.sort((a, b) => {
			if (jumbled[a] == jumbled[b]) {
				return a - b;
			}
			return jumbled[a] - jumbled[b];
		})
		.map((i) => nums[i]);
}

test('sortJumbled', () => {
	expect(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38])).toStrictEqual([338, 38, 991]);
	expect(sortJumbled([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [789, 456, 123])).toStrictEqual([123, 456, 789]);
});
