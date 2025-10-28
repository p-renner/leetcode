function countValidSelections(nums: number[]): number {
	let res = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == 0) {
			if (simulate([...nums], i, 1)) {
				res++;
			}

			if (simulate([...nums], i, -1)) {
				res++;
			}
		}
	}

	return res;

	function simulate(nums: number[], index: number, dir: number): boolean {
		while (index < nums.length && index >= 0) {
			if (nums[index] == 0) {
				index += dir;
				continue;
			}

			nums[index]--;
			dir *= -1;
			index += dir;
		}

		for (let i = 0; i < nums.length; i++) {
			if (nums[i] != 0) {
				return false;
			}
		}

		return true;
	}
}

test('countValidSelections', () => {
	expect(countValidSelections([1, 0, 2, 0, 3])).toBe(2);
});
