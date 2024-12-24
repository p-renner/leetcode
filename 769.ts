function maxChunksToSorted(arr: number[]): number {
	let max = 0;
	let res = 0;

	for (let i = 0; i < arr.length; i++) {
		max = Math.max(max, arr[i]);

		if (max == i) {
			res++;
		}
	}

	return res;
}

test('maxChunksToSorted', () => {
	expect(maxChunksToSorted([4, 3, 2, 1, 0])).toBe(1);
	expect(maxChunksToSorted([1, 0, 2, 3, 4])).toBe(4);
});
