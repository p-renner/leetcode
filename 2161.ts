function pivotArray(nums: number[], pivot: number): number[] {
	const lessThanPivot: number[] = [];
	const equalToPivot: number[] = [];
	const greaterThanPivot: number[] = [];

	for (const num of nums) {
		if (num < pivot) {
			lessThanPivot.push(num);
		} else if (num === pivot) {
			equalToPivot.push(num);
		} else {
			greaterThanPivot.push(num);
		}
	}

	return [...lessThanPivot, ...equalToPivot, ...greaterThanPivot];
}

test('pivotArray', () => {
	expect(pivotArray([9, 12, 5, 10, 14, 3, 10], 10)).toStrictEqual([9, 5, 3, 10, 10, 12, 14]);
	expect(pivotArray([-3, 4, 3, 2], 2)).toStrictEqual([-3, 2, 4, 3]);
});
