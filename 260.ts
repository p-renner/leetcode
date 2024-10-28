function singleNumber(nums: number[]): number[] {
	const set = new Set<number>();

	for (const num of nums) {
		if (set.has(num)) {
			set.delete(num);
			continue;
		}

		set.add(num);
	}

	return [...set];
}

test('singleNumber', () => {
	expect(singleNumber([1, 2, 1, 3, 2, 5])).toStrictEqual([3, 5]);
	expect(singleNumber([-1, 0])).toStrictEqual([-1, 0]);
	expect(singleNumber([0, 1])).toStrictEqual([0, 1]);
});
