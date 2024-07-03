function increasingTriplet(nums: number[]): boolean {
	const arr = new Array(3);

	for (const num of nums) {
		if (arr[0] == undefined) {
			arr[0] = num;
			continue;
		}

		if (arr[0] < num && (arr[1] == undefined || arr[1] > num)) {
			arr[1] = num;
			continue;
		}

		if (arr[0] > num && !arr[1]) {
			arr[0] = num;
			continue;
		}

		if (arr[0] > num && arr[1] > num && (arr[2] == undefined || arr[2] > num)) {
			arr[2] = num;
			continue;
		}

		if (arr[0] >= num && arr[2] < num) {
			arr[0] = arr[2];
			arr[1] = num;
			arr[2] = undefined;
			continue;
		}

		if (arr[0] < num && arr[1] < num) {
			return true;
		}
	}

	return false;
}

test('increasingTriplet', () => {
	expect(increasingTriplet([1, 2, 3, 4, 5])).toBe(true);
	expect(increasingTriplet([5, 4, 3, 2, 1])).toBe(false);
	expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBe(true);
	expect(increasingTriplet([20, 100, 10, 12, 5, 13])).toBe(true);
	expect(increasingTriplet([1, 5, 0, 4, 1, 3])).toBe(true);
	expect(increasingTriplet([2, 4, -2, -3])).toBe(false);
	expect(increasingTriplet(new Array(200).fill(1))).toBe(false);
});
