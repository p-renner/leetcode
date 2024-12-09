function minimumSize(nums: number[], maxOperations: number): number {
	function isPossible(max: number): boolean {
		let total = 0;

		for (let i = 0; i < nums.length; i++) {
			total += Math.ceil(nums[i] / max) - 1;

			if (total > maxOperations) {
				return false;
			}
		}

		return true;
	}

	let left = 1;
	let right = Math.max(...nums);

	while (left < right) {
		const middle = Math.floor((left + right) / 2);

		if (isPossible(middle)) {
			right = middle;
		} else {
			left = middle + 1;
		}
	}

	return left;
}

test('minimumSize', () => {
	expect(minimumSize([9], 2)).toBe(3);
	expect(minimumSize([2, 4, 8, 2], 4)).toBe(2);
	expect(minimumSize([28], 5)).toBe(5);
	expect(minimumSize([28, 12], 5)).toBe(6);
});
