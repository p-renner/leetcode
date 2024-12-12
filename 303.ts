class NumArray {
	prefixSum: number[] = [];

	constructor(nums: number[]) {
		this.prefixSum = new Array(nums.length + 1).fill(0);

		for (let i = 0; i < nums.length; i++) {
			this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
		}
	}

	sumRange(left: number, right: number): number {
		return this.prefixSum[right + 1] - this.prefixSum[left];
	}
}

test('NumArray', () => {
	const obj = new NumArray([-2, 0, 3, -5, 2, -1]);
	expect(obj.sumRange(0, 2)).toBe(1);
	expect(obj.sumRange(2, 5)).toBe(-1);
	expect(obj.sumRange(0, 5)).toBe(-3);
});
