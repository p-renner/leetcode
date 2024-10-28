function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
	return nums1.map((num) => {
		const j = nums2.indexOf(num);

		for (let i = j + 1; i < nums2.length; i++) {
			if (nums2[i] > num) {
				return nums2[i];
			}
		}
		return -1;
	});
}

test('nextGreaterElement', () => {
	expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toStrictEqual([-1, 3, -1]);
	expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toStrictEqual([3, -1]);
});
