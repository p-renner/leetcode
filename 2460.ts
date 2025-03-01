function applyOperations(nums: number[]): number[] {
	const res: number[] = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			continue;
		}

		if (nums[i] != nums[i + 1]) {
			res.push(nums[i]);
			continue;
		}

		res.push(nums[i] * 2);
		i++;
	}

	while (res.length < nums.length) {
		res.push(0);
	}

	return res;
}

test('applyOperations', () => {
	expect(applyOperations([1, 2, 2, 1, 1, 0])).toStrictEqual([1, 4, 2, 0, 0, 0]);
	expect(applyOperations([0, 1])).toStrictEqual([1, 0]);
});
