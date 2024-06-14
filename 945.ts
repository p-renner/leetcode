function minIncrementForUnique(nums: number[]): number {
	nums.sort((a, b) => a - b);

	let count = 0;
	let prev = nums[0];

	for (const num of nums.slice(1)) {
		if (num > prev) {
			prev = num;
			continue;
		}

		count += prev + 1 - num;
		prev++;
	}

	return count;
}

function functionalMinIncrementForUnique(nums: number[]): number {
	return nums
		.sort((a, b) => a - b)
		.reduce((count, num, i, nums) => {
			if (i == 0) return 0;

			if (num > nums[i - 1]) {
				return count;
			}

			nums[i] = nums[i - 1] + 1;
			return count + nums[i] - num;
		}, 0);
}

test('minIncrementForUnique', () => {
	expect(minIncrementForUnique([1, 2, 2])).toBe(1);
	expect(minIncrementForUnique([3, 2, 1, 2, 1, 7])).toBe(6);
});

test('functional', () => {
	expect(functionalMinIncrementForUnique([1, 2, 2])).toBe(1);
	expect(functionalMinIncrementForUnique([3, 2, 1, 2, 1, 7])).toBe(6);
});
