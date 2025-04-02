function maximumTripletValue(nums: number[]): number {
	let max = 0;

	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				max = Math.max(max, (nums[i] - nums[j]) * nums[k]);
			}
		}
	}

	return max;
}

test('maximumTripletValue', () => {
	expect(maximumTripletValue([12, 6, 1, 2, 7])).toBe(77);
	expect(maximumTripletValue([1, 10, 3, 4, 19])).toBe(133);
	expect(maximumTripletValue([1, 2, 3])).toBe(0);
});
