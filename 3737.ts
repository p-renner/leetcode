function countMajoritySubarrays(nums: number[], target: number): number {
	let res = 0;

	for (let i = 0; i < nums.length; i++) {
		let count = 0;
		for (let j = i; j < nums.length; j++) {
			if (nums[j] == target) {
				count++;
			}

			if (count * 2 <= j - i + 1) {
				continue;
			}

			res++;
		}
	}

	return res;
}

describe('countMajoritySubarrays', () => {
	test('case 1', () => {
		expect(countMajoritySubarrays([1, 2, 2, 3], 2)).toBe(5);
	});
	test('case 2', () => {
		expect(countMajoritySubarrays([1, 1, 1, 1], 1)).toBe(10);
	});
	test('case 3', () => {
		expect(countMajoritySubarrays([1, 2, 3], 4)).toBe(0);
	});
	test('case 4', () => {
		expect(countMajoritySubarrays([5, 10], 10)).toBe(1);
	});
});
