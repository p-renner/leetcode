function resultsArray(nums: number[], k: number): number[] {
	const results = new Array(nums.length - k + 1).fill(-1);

	for (let i = 0; i < nums.length - k + 1; i++) {
		const arr = nums.slice(i, i + k);

		if (
			!arr.every((val, j) => {
				return j == 0 || arr[j - 1] + 1 == val;
			})
		) {
			continue;
		}

		results[i] = Math.max(...arr);
	}

	return results;
}

test('resultArray', () => {
	expect(resultsArray([1, 2, 3, 4, 3, 2, 5], 3)).toStrictEqual([3, 4, -1, -1, -1]);
	expect(resultsArray([2, 2, 2, 2, 2], 4)).toStrictEqual([-1, -1]);
	expect(resultsArray([3, 2, 3, 2, 3, 2], 2)).toStrictEqual([-1, 3, -1, 3, -1]);
});
