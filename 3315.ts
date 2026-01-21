function minBitwiseArray(nums: number[]): number[] {
	return nums.map(findMin);

	function findMin(num: number): number {
		if (num % 2 == 0) {
			return -1;
		}

		let bitmask = 1;

		while ((num & (bitmask << 1)) != 0) {
			bitmask <<= 1;
		}

		return num & (num - bitmask);
	}
}

describe('minBitwiseArray', () => {
	test('case 1', () => {
		expect(minBitwiseArray([2, 3, 5, 7])).toBe([-1, 1, 4, 3]);
	});
	test('case 2', () => {
		expect(minBitwiseArray([11, 13, 31])).toBe([9, 12, 15]);
	});
});
