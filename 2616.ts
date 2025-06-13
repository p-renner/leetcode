function minimizeMax(nums: number[], p: number): number {
	nums.sort((a, b) => a - b);

	function canAchieve(target: number): boolean {
		let sum = 0;
		let curr = nums[0];

		for (let i = 1; i < nums.length; i++) {
			if (sum == p) {
				break;
			}

			if (nums[i] - curr <= target) {
				curr = nums[i + 1];
				i++;
				sum++;
			} else {
				curr = nums[i];
			}
		}

		return sum == p;
	}

	let left = 0;
	let right = nums[nums.length - 1] - nums[0];

	while (left < right) {
		const middle = Math.floor((left + right) / 2);

		if (canAchieve(middle)) {
			right = middle;
		} else {
			left = middle + 1;
		}
	}

	return left;
}

test('minimizeMax', () => {
	expect(minimizeMax([10, 1, 2, 7, 1, 3], 2)).toBe(1);
	expect(minimizeMax([4, 2, 1, 2], 1)).toBe(0);
});
