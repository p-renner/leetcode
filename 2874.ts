function maximumTripletValue(nums: number[]): number {
	const prefixMax: number[] = new Array(nums.length).fill(0);
	const suffixMax: number[] = new Array(nums.length).fill(0);
	prefixMax[0] = nums[0];
	suffixMax[nums.length - 1] = nums[nums.length - 1];

	for (let i = 1; i < nums.length; i++) {
		prefixMax[i] = Math.max(prefixMax[i - 1], nums[i]);
	}

	for (let i = nums.length - 2; i >= 0; i--) {
		suffixMax[i] = Math.max(suffixMax[i + 1], nums[i]);
	}

	let max = 0;

	for (let i = 1; i < nums.length - 1; i++) {
		const curr = (prefixMax[i - 1] - nums[i]) * suffixMax[i + 1];
		max = Math.max(max, curr);
	}

	return max;
}

test('maximumTripletValue', () => {
	expect(maximumTripletValue([12, 6, 1, 2, 7])).toBe(77);
	expect(maximumTripletValue([1, 10, 3, 4, 19])).toBe(133);
	expect(maximumTripletValue([1, 2, 3])).toBe(0);
});
