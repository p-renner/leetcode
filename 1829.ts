function getMaximumXor(nums: number[], maximumBit: number): number[] {
	const prefix = new Array(nums.length).fill(0);
	prefix[0] = nums[0];

	for (let i = 0; i < nums.length; i++) {
		prefix[i] = prefix[i - 1] ^ nums[i];
	}
	const result = [];
	const mask = (1 << maximumBit) - 1;

	for (let i = 0; i < nums.length; i++) {
		result.push(prefix[nums.length - i - 1] ^ mask);
	}

	return result;
}

test('getMaximumXor', () => {
	expect(getMaximumXor([0, 1, 1, 3], 2)).toStrictEqual([0, 3, 2, 3]);
	expect(getMaximumXor([2, 3, 4, 7], 3)).toStrictEqual([5, 2, 6, 5]);
	expect(getMaximumXor([0, 1, 2, 2, 5, 7], 3)).toStrictEqual([4, 3, 6, 4, 6, 7]);
});
