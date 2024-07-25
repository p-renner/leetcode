function sortArray(nums: number[]): number[] {
	function mergeSort(arr: number[]) {
		if (arr.length < 2) {
			return;
		}

		const mid = arr.length / 2;
		const left: number[] = [];
		const right: number[] = [];

		let k = 0;

		for (let i = 0; i < arr.length; i++) {
			if (i < mid) {
				left[i] = arr[i];
			} else {
				right[k] = arr[i];
				k = k + 1;
			}
		}
		mergeSort(left);
		mergeSort(right);
		mergeArr(left, right, arr);
	}

	function mergeArr(left: number[], right: number[], arr: number[]) {
		let i = 0,
			l = 0,
			r = 0;

		while (l < left.length && r < right.length) {
			if (left[l] < right[r]) {
				arr[i++] = left[l++];
			} else {
				arr[i++] = right[r++];
			}
		}
		while (l < left.length) {
			arr[i++] = left[l++];
		}
		while (r < right.length) {
			arr[i++] = right[r++];
		}
	}
	mergeSort(nums);
	return nums;
}

test('sortArray', () => {
	expect(sortArray([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
});
