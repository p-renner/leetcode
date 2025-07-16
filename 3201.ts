function maximumLength(nums: number[]): number {
	let lastIsEven = nums[0] % 2 == 1;
	let res = [0, 0, 0];

	for (let i = 0; i < nums.length; i++) {
		const isEven = nums[i] % 2 == 0;

		if (isEven) {
			res[0]++;
		} else {
			res[1]++;
		}

		if (isEven && !lastIsEven) {
			res[2]++;
		}

		if (!isEven && lastIsEven) {
			res[2]++;
		}

		lastIsEven = isEven;
	}

	return Math.max(...res);
}

test('maximumLength', () => {
	expect(maximumLength([1, 2, 3, 4])).toBe(4);
	expect(maximumLength([1, 2, 1, 1, 2, 1, 2])).toBe(6);
	expect(maximumLength([1, 3])).toBe(2);
});
