function tupleSameProduct(nums: number[]): number {
	const freq = new Map<number, number>();

	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			const prod = nums[i] * nums[j];
			freq.set(prod, (freq.get(prod) || 0) + 1);
		}
	}

	return [...freq.values()].reduce((acc, f) => acc + 4 * f * (f - 1), 0);
}

test('tupleSameProduct', () => {
	expect(tupleSameProduct([2, 3, 4, 6])).toBe(8);
	expect(tupleSameProduct([1, 2, 4, 5, 10])).toBe(16);
});
