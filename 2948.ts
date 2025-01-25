function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
	const sorted = [...nums].sort((a, b) => a - b);
	const numToGroup = new Map<number, number>();
	const groupToList = new Map<number, number[]>();

	numToGroup.set(sorted[0], 0);
	groupToList.set(0, [sorted[0]]);

	let curr = 0;

	for (let i = 1; i < sorted.length; i++) {
		if (Math.abs(sorted[i] - sorted[i - 1]) > limit) {
			curr++;
		}

		numToGroup.set(sorted[i], curr);

		if (!groupToList.has(curr)) {
			groupToList.set(curr, []);
		}

		groupToList.get(curr)!.push(sorted[i]);
	}

	for (let i = 0; i < nums.length; i++) {
		const group = numToGroup.get(nums[i])!;
		nums[i] = groupToList.get(group)!.shift()!;
	}

	return nums;
}

test('lexicographicallySmallestArray', () => {
	expect(lexicographicallySmallestArray([1, 5, 3, 9, 8], 2)).toStrictEqual([1, 3, 5, 8, 9]);
	expect(lexicographicallySmallestArray([1, 7, 6, 18, 2, 1], 3)).toStrictEqual([1, 6, 7, 18, 1, 2]);
	expect(lexicographicallySmallestArray([1, 7, 28, 19, 10], 3)).toStrictEqual([1, 7, 28, 19, 10]);
});
