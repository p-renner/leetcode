function intersect(nums1: number[], nums2: number[]): number[] {
	if (nums1.length > nums2.length) {
		[nums1, nums2] = [nums2, nums1];
	}

	const freqMap = new Map<number, number>();
	for (const num of nums1) {
		freqMap.set(num, (freqMap.get(num) || 0) + 1);
	}

	const res: number[] = [];
	for (const num of nums2) {
		const amount = freqMap.get(num);

		if (!amount) {
			continue;
		}

		if (amount == 1) {
			freqMap.delete(num);
		} else {
			freqMap.set(num, amount - 1);
		}
		res.push(num);
	}

	return res;
}

test('intersect', () => {
	expect(intersect([1, 2, 2, 1], [2, 2])).toStrictEqual([2, 2]);
	expect(intersect([4, 9, 5], [4, 9])).toStrictEqual([4, 9]);
});
