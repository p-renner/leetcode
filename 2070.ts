function maximumBeauty(items: number[][], queries: number[]): number[] {
	items.sort((a, b) => a[0] - b[0]);
	let max = 0;

	for (let i = 0; i < items.length; i++) {
		max = Math.max(max, items[i][1]);
		items[i][1] = max;
	}

	return queries.map((price) => {
		let left = 0;
		let right = items.length - 1;
		let max = 0;

		while (left <= right) {
			const mid = Math.floor((left + right) / 2);
			if (items[mid][0] > price) {
				right = mid - 1;
			} else {
				max = Math.max(max, items[mid][1]);
				left = mid + 1;
			}
		}
		return max;
	});
}

test('maximumBeauty', () => {
	expect(
		maximumBeauty(
			[
				[1, 2],
				[3, 2],
				[2, 4],
				[5, 6],
				[3, 5],
			],
			[1, 2, 3, 4, 5, 6],
		),
	).toStrictEqual([2, 4, 5, 5, 6, 6]);
	expect(maximumBeauty([[10, 1000]], [5])).toStrictEqual([0]);
});
