function findLengthOfShortestSubarray(arr: number[]): number {
	let right = arr.length - 1;

	while (right > 0 && arr[right] >= arr[right - 1]) {
		right -= 1;
	}

	let ans = right;
	let left = 0;

	while (left < right && (left == 0 || arr[left - 1] <= arr[left])) {
		while (right < arr.length && arr[left] > arr[right]) {
			right += 1;
		}

		ans = Math.min(ans, right - left - 1);
		left += 1;
	}

	return ans;
}

test('findLengthOfShortestSubarray', () => {
	expect(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5])).toBe(3);
	expect(findLengthOfShortestSubarray([5, 4, 3, 2, 1])).toBe(4);
	expect(findLengthOfShortestSubarray([1, 2, 3])).toBe(0);
	expect(findLengthOfShortestSubarray([10, 13, 17, 21, 15, 15, 9, 17, 22, 22, 13])).toBe(7);
});
