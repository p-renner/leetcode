function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i];
		const x = target - curr;

		if (map.has(x)) {
			return [map.get(x), i];
		}

		map.set(curr, i);
	}

	return [];
}

test('twoSum', () => {
	expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
	expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
	expect(twoSum([3, 3], 6)).toEqual([0, 1]);
	expect(twoSum([3, 2, 3], 6)).toEqual([0, 2]);
	expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
	expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});
