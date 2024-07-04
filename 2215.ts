function findDifference(nums1: number[], nums2: number[]): number[][] {
	const ans = Array.from({ length: 2 }, (_) => new Array<number>());
	const [set1, set2] = [new Set(nums1), new Set(nums2)];

	for (const num of nums1) {
		if (set2.has(num)) {
			continue;
		}
		ans[0].push(num);
		set2.add(num);
	}

	for (const num of nums2) {
		if (set1.has(num)) {
			continue;
		}
		ans[1].push(num);
		set1.add(num);
	}

	return ans;
}

test('findDifferences', () => {
	expect(findDifference([1, 2, 3], [2, 4, 6])).toStrictEqual([
		[1, 3],
		[4, 6],
	]);
	expect(findDifference([1, 2, 3, 3], [1, 1, 2, 2])).toStrictEqual([[3], []]);
});
