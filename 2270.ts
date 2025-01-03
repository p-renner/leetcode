function waysToSplitArray(nums: number[]): number {
	const sum = nums.reduce((acc, curr) => acc + curr, 0);
	let currSum = 0;
	let res = 0;

	for (let i = 0; i < nums.length - 1; i++) {
		currSum += nums[i];

		if (currSum < sum - currSum) {
			continue;
		}

		res++;
	}

	return res;
}

test('waysToSplitArray', () => {
	expect(waysToSplitArray([10, 4, -8, 7])).toBe(2);
	expect(waysToSplitArray([2, 3, 1, 0])).toBe(2);
});
