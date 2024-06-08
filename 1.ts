function twoSum(nums: number[], target: number): number[] {
	const map: Map<number, number> = new Map();

	for (let i = 0; i < nums.length; i++) {
		const restIndex = map.get(target - nums[i])!;

		if (restIndex >= 0) {
			return [restIndex, i];
		}
		map.set(nums[i], i);
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
