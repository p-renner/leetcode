function minOperations(nums: number[]): number {
	let res = 0;
	for (let i = 0; i < nums.length - 2; i++) {
		console.log(nums[i]);

		if (nums[i] === 1) {
			continue;
		}

		nums[i] = 1;
		nums[i + 1] = nums[i + 1] === 1 ? 0 : 1;
		nums[i + 2] = nums[i + 2] === 1 ? 0 : 1;
		res++;
	}

	if (nums[nums.length - 2] === 1 && nums[nums.length - 1] === 1) {
		return res;
	}

	return -1;
}

test('minOperations', () => {
	expect(minOperations([0, 1, 1, 1, 0, 0])).toBe(3);
	expect(minOperations([0, 1, 1, 1])).toBe(-1);
});
