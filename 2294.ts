function partitionArray(nums: number[], k: number): number {
	const numsDedupe = Array.from(new Set(nums));
	const sorted = numsDedupe.sort((a, b) => a - b);

	let res = 1;
	let first = sorted[0];

	for (let i = 1; i < sorted.length; i++) {
		if (sorted[i] - first > k) {
			res++;
			first = sorted[i];
		}
	}

	return res;
}

test('partitionArray', () => {
	expect(partitionArray([3, 6, 1, 2, 5], 2)).toBe(2);
	expect(partitionArray([1, 2, 3], 1)).toBe(2);
	expect(partitionArray([2, 2, 4, 5], 0)).toBe(3);
});
