function findTargetSumWays(nums: number[], target: number): number {
	function find(i: number, target: number): number {
		if (nums.length == i) {
			return target == 0 ? 1 : 0;
		}

		return find(i + 1, target + nums[i]) + find(i + 1, target - nums[i]);
	}

	return find(0, target);
}

test('findTargetSumWays', () => {
	expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toBe(5);
	expect(findTargetSumWays([1], 1)).toBe(1);
});
