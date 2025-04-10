function minOperations(nums: number[], k: number): number {
	if (Math.min(...nums) < k) {
		return -1;
	}

	const set = new Set(nums);

	return set.size - (set.has(k) ? 1 : 0);
}

test('minOperations', () => {
	expect(minOperations([5, 2, 5, 4, 5], 2)).toBe(2);
	expect(minOperations([2, 1, 2], 2)).toBe(-1);
	expect(minOperations([9, 7, 5, 3], 1)).toBe(4);
});
