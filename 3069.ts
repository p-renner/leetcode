function resultArray(nums: number[]): number[] {
	const [arr1, arr2] = [[nums[0]], [nums[1]]];

	for (let i = 2; i < nums.length; i++) {
		if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
			arr1.push(nums[i]);
		} else {
			arr2.push(nums[i]);
		}
	}

	return arr1.concat(arr2);
}

test('resultArray', () => {
	expect(resultArray([2, 1, 3])).toStrictEqual([2, 3, 1]);
	expect(resultArray([5, 4, 3, 8])).toStrictEqual([5, 3, 4, 8]);
});
