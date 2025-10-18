function maxDistinctElements(nums: number[], k: number): number {
	nums.sort((a, b) => a - b);
	let min = -Infinity;
	let res = 0;

	for (const num of nums) {
		if (num + k > min) {
			min = Math.max(min + 1, num - k);
			res++;
			continue;
		}
	}

	return res;
}

test('maxDistinctElements', () => {
	expect(maxDistinctElements([1, 2, 2, 3, 3, 4], 2)).toBe(6);
	expect(maxDistinctElements([4, 4, 4, 4], 1)).toBe(3);
});
