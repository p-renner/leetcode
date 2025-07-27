function countHillValley(nums: number[]): number {
	let i = 1;

	while (nums[0] == nums[i]) {
		i++;
	}

	let curr = nums[0] < nums[i];
	let count = 0;

	for (let j = i; j < nums.length - 1; j++) {
		if (nums[j] == nums[j + 1]) {
			continue;
		}

		if (curr != nums[j] < nums[j + 1]) {
			curr = !curr;
			count++;
		}
	}

	return count;
}

test('countHillValley', () => {
	expect(countHillValley([2, 4, 1, 1, 6, 5])).toBe(3);
	expect(countHillValley([6, 6, 5, 5, 4, 1])).toBe(0);
	expect(
		countHillValley([
			49, 16, 11, 24, 82, 24, 73, 61, 62, 44, 25, 59, 3, 57, 62, 7, 38, 61, 22, 92, 90, 60, 28, 21, 37, 54, 43,
			14, 3, 64, 48, 51, 55, 55, 58, 43, 67, 46, 36, 32, 78,
		]),
	).toBe(23);
});
