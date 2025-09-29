function splitArray(nums: number[]): number {
	const inc: boolean[] = new Array(nums.length).fill(false);
	const dec: boolean[] = new Array(nums.length).fill(false);

	inc[0] = true;
	dec[dec.length - 1] = true;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i - 1] >= nums[i]) {
			break;
		}
		inc[i] = true;
	}

	for (let i = nums.length - 2; i >= 0; i--) {
		if (nums[i] <= nums[i + 1]) {
			break;
		}
		dec[i] = true;
	}

	const sum = nums.reduce((acc, curr) => acc + curr, 0);
	let left = 0;
	let res = Infinity;

	for (let i = 0; i < nums.length; i++) {
		left += nums[i];

		if (inc[i] && dec[i + 1]) {
			res = Math.min(res, Math.abs(2 * left - sum));
		}
	}

	return res == Infinity ? -1 : res;
}

test('splitArray', () => {
	expect(splitArray([1, 3, 2])).toBe(2);
	expect(splitArray([1, 2, 4, 3])).toBe(4);
	expect(splitArray([3, 1, 2])).toBe(-1);
});
