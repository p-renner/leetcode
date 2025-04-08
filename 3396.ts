function minimumOperations(nums: number[]): number {
	const set = new Set<number>();

	for (let i = nums.length - 1; i >= 0; i--) {
		if (set.has(nums[i])) {
			break;
		}

		set.add(nums[i]);
	}

	return Math.ceil((nums.length - set.size) / 3);
}

test('minimumOperations', () => {
	expect(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7])).toBe(2);
	expect(minimumOperations([4, 5, 6, 4, 4])).toBe(2);
	expect(minimumOperations([6, 7, 8, 9])).toBe(0);
});
