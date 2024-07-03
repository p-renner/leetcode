function productExceptSelf(nums: number[]): number[] {
	const zero = nums.indexOf(0);
	if (zero !== nums.lastIndexOf(0)) {
		return Array(nums.length).fill(0);
	}

	if (zero !== -1) {
		const ret = Array(nums.length).fill(0);
		ret[zero] = nums.reduce((acc, curr) => (curr == 0 ? acc : acc * curr), 1);
		return ret;
	}

	const product = nums.reduce((acc, curr) => acc * curr, 1);
	return Array(nums.length)
		.fill(1)
		.map((_, i) => product / nums[i]);
}

test('productExceptSelf', () => {
	expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
	expect(productExceptSelf([-1, 1, 0, -3, 3])).toStrictEqual([0, 0, 9, 0, 0]);
});
