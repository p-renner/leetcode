class KthLargest {
	nums: number[];
	k: number;

	constructor(k: number, nums: number[]) {
		this.nums = nums.sort((a, b) => b - a).slice(0, k);
		this.k = k;
	}

	add(val: number): number {
		this.nums.push(val);
		this.nums = this.nums.sort((a, b) => b - a).slice(0, this.k);
		return this.nums[this.nums.length - 1];
	}
}

test('KthLargest', () => {
	const obj = new KthLargest(3, [4, 5, 8, 2]);
	for (const [num, res] of [
		[3, 4],
		[5, 5],
		[10, 5],
		[9, 8],
		[4, 8],
	]) {
		expect(obj.add(num)).toBe(res);
	}
});
