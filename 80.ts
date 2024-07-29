function removeDuplicates(nums: number[]): number {
	let ins = 1;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] == nums[ins - 2]) {
			continue;
		}

		nums[ins++] = nums[i];
	}

	return ins;
}

test('removeDuplicates', () => {
	function testCase(nums: number[], result: number[]) {
		const res = removeDuplicates(nums);
		expect(res).toBe(result.length);
		expect(nums.slice(0, res)).toEqual(result);
	}
	testCase([1, 1, 1, 2, 2, 3], [1, 1, 2, 2, 3]);
	testCase([0, 0, 1, 1, 1, 1, 2, 3, 3], [0, 0, 1, 1, 2, 3, 3]);
});
