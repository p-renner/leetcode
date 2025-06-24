function findKDistantIndices(nums: number[], key: number, k: number): number[] {
	const marked = new Array<boolean>(nums.length);

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == key) {
			for (let j = Math.max(i - k, 0); j <= i + k && j < nums.length; j++) {
				marked[j] = true;
			}
		}
	}

	return marked.map((mark, i) => (mark ? i : -1)).filter((num) => num != -1);
}

test('findKDistantIndices', () => {
	expect(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
