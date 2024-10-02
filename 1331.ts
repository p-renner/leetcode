function arrayRankTransform(arr: number[]): number[] {
	const map = new Map<number, number>();
	Array.from(new Set(arr))
		.sort((a, b) => a - b)
		.forEach((ele, i) => map.set(ele, i + 1));

	return arr.map((ele) => map.get(ele));
}

test('arrayRankTransform', () => {
	expect(arrayRankTransform([40, 10, 20, 30])).toStrictEqual([4, 1, 2, 3]);
	expect(arrayRankTransform([100, 100, 100])).toStrictEqual([1, 1, 1]);
	expect(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])).toStrictEqual([5, 3, 4, 2, 8, 6, 7, 1, 3]);
});
