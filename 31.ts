function nextPermutation(nums: number[]): void {
	for (let i = nums.length - 1; i > 0; i--) {
		if (nums[i - 1] >= nums[i]) {
			continue;
		}

		let j = i;
		while (nums[j] > nums[i - 1]) {
			j++;
		}

		[nums[j - 1], nums[i - 1]] = [nums[i - 1], nums[j - 1]];

		let p2 = nums.length - 1;
		while (i < p2) {
			[nums[i], nums[p2]] = [nums[p2], nums[i]];
			p2--;
			i++;
		}
		return;
	}

	nums.reverse();
}

test('nextPermutation', () => {
	const nums = [1, 2, 3];
	nextPermutation(nums);
	expect(nums).toEqual([1, 3, 2]);
	nextPermutation(nums);
	expect(nums).toEqual([2, 1, 3]);
	nextPermutation(nums);
	expect(nums).toEqual([2, 3, 1]);
	nextPermutation(nums);
	expect(nums).toEqual([3, 1, 2]);
	nextPermutation(nums);
	expect(nums).toEqual([3, 2, 1]);
	nextPermutation(nums);
	expect(nums).toEqual([1, 2, 3]);
	nextPermutation(nums);
	expect(nums).toEqual([1, 3, 2]);
	nextPermutation(nums);
	expect(nums).toEqual([2, 1, 3]);
	nextPermutation(nums);
	expect(nums).toEqual([2, 3, 1]);
	nextPermutation(nums);
	expect(nums).toEqual([3, 1, 2]);
	nextPermutation(nums);
	expect(nums).toEqual([3, 2, 1]);
	nextPermutation(nums);
	expect(nums).toEqual([1, 2, 3]);
	nextPermutation(nums);
	expect(nums).toEqual([1, 3, 2]);
	nextPermutation(nums);
	expect(nums).toEqual([2, 1, 3]);
	nextPermutation(nums);
	expect(nums).toEqual([2, 3, 1]);
	nextPermutation(nums);
	expect(nums).toEqual([3, 1, 2]);
	nextPermutation(nums);
	expect(nums).toEqual([3, 2, 1]);
	nextPermutation(nums);
	expect(nums).toEqual([1, 2, 3]);
	nextPermutation(nums);
	expect(nums).toEqual([1, 3, 2]);
	nextPermutation(nums);
	expect(nums).toEqual([2, 1, 3]);
	nextPermutation(nums);
	expect(nums).toEqual([2, 3, 1]);
	nextPermutation(nums);
	expect(nums).toEqual([3, 1, 2]);
	nextPermutation(nums);
	expect(nums).toEqual([3, 2, 1]);
	nextPermutation(nums);
	expect(nums).toEqual([1, 2, 3]);
	nextPermutation(nums);
});
