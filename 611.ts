function triangleNumber(nums: number[]): number {
	nums.sort((a, b) => a - b);
	let res = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			let sum = nums[i] + nums[j];

			for (let k = j + 1; k < nums.length; k++) {
				if (nums[k] >= sum) {
					break;
				}

				res++;
			}
		}
	}

	return res;
}

test('triangleNumber', () => {
	expect(triangleNumber([2, 2, 3, 4])).toBe(3);
	expect(triangleNumber([4, 2, 3, 4])).toBe(4);
});
