function findFinalValue(nums: number[], original: number): number {
	const set = new Set(nums);
	let search = original;

	while (set.has(search)) {
		search *= 2;
	}

	return search;
}

test('findFinalValue', () => {
	expect(findFinalValue([5, 3, 6, 1, 12], 3)).toBe(24);
	expect(findFinalValue([2, 7, 9], 4)).toBe(4);
});
