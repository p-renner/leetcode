function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
	const map = new Map<number, number>();

	const mapFunc = ([key, val]: number[]) => {
		map.set(key, (map.get(key) || 0) + val);
	};

	nums1.map(mapFunc);
	nums2.map(mapFunc);

	return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
}

test('mergeArrays', () => {
	expect(
		mergeArrays(
			[
				[1, 2],
				[2, 3],
				[4, 5],
			],
			[
				[1, 4],
				[3, 2],
				[4, 1],
			],
		),
	).toStrictEqual([
		[1, 6],
		[2, 3],
		[3, 2],
		[4, 6],
	]);
});
