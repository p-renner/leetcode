function isZeroArray(nums: number[], queries: number[][]): boolean {
	const diff = new Array(nums.length).fill(0);

	for (const [start, end] of queries) {
		diff[start] += 1;
		diff[end + 1] -= 1;
	}

	let curr = 0;

	for (let i = 0; i < nums.length; i++) {
		curr += diff[i];

		if (curr < nums[i]) {
			return false;
		}
	}

	return true;
}

test('isZeroArray', () => {
	expect(isZeroArray([1, 0, 1], [[0, 2]])).toBe(true);
	expect(
		isZeroArray(
			[4, 3, 2, 1],
			[
				[1, 3],
				[0, 2],
			],
		),
	).toBe(false);
});
