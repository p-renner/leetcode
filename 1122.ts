function relativeSortArray(arr1: number[], arr2: number[]): number[] {
	const map = new Map<number, number>();

	arr2.forEach((v, i) => {
		map.set(v, i);
	});

	return arr1
		.filter((v) => map.has(v))
		.sort((a, b) => map.get(a)! - map.get(b)!)
		.concat(arr1.filter((v) => !map.has(v)).sort((a, b) => a - b));
}

test('relativeSortArray', () => {
	expect(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])).toEqual([
		2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19,
	]);
	expect(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])).toEqual([22, 28, 8, 6, 17, 44]);
});
