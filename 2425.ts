function xorAllNums(nums1: number[], nums2: number[]): number {
	let res = 0;

	if (nums2.length % 2 == 1) {
		res = nums1.reduce((acc, num) => acc ^ num, res);
	}

	if (nums1.length % 2 == 1) {
		res = nums2.reduce((acc, num) => acc ^ num, res);
	}

	return res;
}

test('xorAllNums', () => {
	expect(xorAllNums([2, 1, 3], [10, 2, 5, 0])).toBe(13);
	expect(xorAllNums([1, 2], [3, 4])).toBe(0);
	expect(xorAllNums([10], [2])).toBe(8);
});
