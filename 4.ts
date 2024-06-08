// Note: This is a brute force solution. It is not optimal.
// The time complexity is O(nlogn) because of the sorting.
// The best solution is O(log(min(m,n))) using binary search and divide and conquer.
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	if (nums1[nums1.length - 1] < nums2[0]) {
		return getMedian([...nums1, ...nums2]);
	}

	if (nums2[nums2.length - 1] < nums1[0]) {
		return getMedian([...nums2, ...nums1]);
	}

	const [m1, m2] = [getMedian(nums1), getMedian(nums2)];
	if (m1 == m2) {
		return m1;
	}

	const nums = nums1.concat(nums2).sort((a, b) => a - b);
	return getMedian(nums);
}

function getMedian(nums: number[]): number {
	const mid = Math.floor(nums.length / 2);

	if (nums.length % 2 === 0) {
		return (nums[mid - 1] + nums[mid]) / 2;
	}
	return nums[mid];
}

test('findMedianSortedArrays', () => {
	expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
	expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
});
