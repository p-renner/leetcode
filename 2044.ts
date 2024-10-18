function countMaxOrSubsets(nums: number[]): number {
	let max = 0;
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		max |= nums[i];
	}

	for (let i = 0; i < 1 << nums.length; i++) {
		let or = 0;

		for (let j = 0; j < nums.length; j++) {
			if (i & (1 << j)) {
				or |= nums[j];
			}
		}

		if (or === max) {
			count++;
		}
	}

	return count;
}

test('countMaxOrSubsets', () => {
	expect(countMaxOrSubsets([3, 1])).toBe(2);
	expect(countMaxOrSubsets([2, 2, 2])).toBe(7);
	expect(countMaxOrSubsets([3, 2, 1, 5])).toBe(6);
});
