function findThePrefixCommonArray(A: number[], B: number[]): number[] {
	let count = 0;
	const seen = new Set<number>();
	const res: number[] = [];

	for (let i = 0; i < A.length; i++) {
		if (!seen.has(A[i])) {
			seen.add(A[i]);
		} else {
			count++;
		}

		if (!seen.has(B[i])) {
			seen.add(B[i]);
		} else {
			count++;
		}
		res.push(count);
	}

	return res;
}

test('findThePrefixCommonArray', () => {
	expect(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4])).toStrictEqual([0, 2, 3, 4]);
	expect(findThePrefixCommonArray([2, 3, 1], [3, 1, 2])).toStrictEqual([0, 1, 3]);
});
