function minSum(nums1: number[], nums2: number[]): number {
	const min = (acc: number, num: number) => acc + (num == 0 ? 1 : num);

	const min1 = nums1.reduce(min, 0);
	const min2 = nums2.reduce(min, 0);

	if (min1 == min2) {
		return min1;
	}

	const noZero1 = nums1.every((num) => num != 0);
	const noZero2 = nums2.every((num) => num != 0);

	if ((noZero1 && noZero2) || (noZero1 && min1 < min2) || (noZero2 && min2 < min1)) {
		return -1;
	}

	return Math.max(min1, min2);
}

test('minSum', () => {
	expect(minSum([3, 2, 0, 1, 0], [6, 5, 0])).toBe(12);
	expect(minSum([2, 0, 2, 0], [1, 4])).toBe(-1);
});
