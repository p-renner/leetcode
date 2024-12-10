function splitArray(nums: number[], k: number): number {
	let left = Math.max(...nums);
	let right = nums.reduce((acc, curr) => acc + curr, 0);

	while (left <= right) {
		const mid = left + Math.floor((right - left) / 2);

		if (isValid(mid)) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return left;

	function isValid(max: number): boolean {
		let sum = 0;
		let count = 1;

		for (let i = 0; i < nums.length; i++) {
			sum += nums[i];

			if (sum > max) {
				sum = nums[i];
				count++;
			}
		}

		return count <= k;
	}
}

test('splitArray', () => {
	expect(splitArray([7, 2, 5, 10, 8], 2)).toBe(18);
	expect(splitArray([1, 2, 3, 4, 5], 2)).toBe(9);
});
