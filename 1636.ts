function frequencySort(nums: number[]): number[] {
	const freq = new Map<number, number>();

	nums.forEach((num) => freq.set(num, (freq.get(num) || 0) + 1));

	return Array.from(freq.entries())
		.sort((a, b) => {
			if (a[1] == b[1]) {
				return b[0] - a[0];
			}

			return a[1] - b[1];
		})
		.map((entry) => Array.from({ length: entry[1] }, () => entry[0]))
		.flat();
}

test('frequencySort', () => {
	expect(frequencySort([1, 1, 2, 2, 2, 3])).toStrictEqual([3, 1, 1, 2, 2, 2]);
	expect(frequencySort([2, 3, 1, 3, 2])).toStrictEqual([1, 3, 3, 2, 2]);
	expect(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])).toStrictEqual([5, -1, 4, 4, -6, -6, 1, 1, 1]);
});
