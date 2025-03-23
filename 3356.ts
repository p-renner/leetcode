function minZeroArray(nums: number[], queries: number[][]): number {
	const n = nums.length;
	let sum = 0;
	let k = 0;
	const diff = Array(n).fill(0);

	for (let i = 0; i < n; i++) {
		while (sum + diff[i] < nums[i]) {
			k++;

			if (k > queries.length) {
				return -1;
			}

			const [l, r, val] = queries[k - 1];

			if (r >= i) {
				diff[Math.max(l, i)] += val;
				diff[r + 1] -= val;
			}
		}

		sum += diff[i];
	}

	return k;
}

test('minZeroArray', () => {
	expect(
		minZeroArray(
			[2, 0, 2],
			[
				[0, 2, 1],
				[0, 2, 1],
				[1, 1, 3],
			],
		),
	).toBe(2);
	expect(
		minZeroArray(
			[4, 3, 2, 1],
			[
				[1, 3, 2],
				[0, 2, 1],
			],
		),
	).toBe(-1);
});
