function countValidSelections(nums: number[]): number {
	let sum = nums.reduce((acc, curr) => acc + curr, 0);
	let prefix = 0;
	let res = 0;

	for (const num of nums) {
		if (num != 0) {
			prefix += num;
			continue;
		}

		const postfix = sum - prefix;
		if (postfix == prefix) {
			res += 2;
		} else if (postfix + 1 == prefix || postfix == prefix + 1) {
			res += 1;
		} else if (prefix + 1 > postfix) {
			break;
		}
	}

	return res;
}

test('countValidSelections', () => {
	expect(countValidSelections([1, 0, 2, 0, 3])).toBe(2);
	expect(countValidSelections([2, 3, 4, 0, 4, 1, 0])).toBe(0);
});
