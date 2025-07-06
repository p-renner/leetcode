class FindSumPairs {
	private nums1: number[];
	private nums2: number[];
	private countMap: Map<number, number>;

	constructor(nums1: number[], nums2: number[]) {
		this.nums1 = nums1;
		this.nums2 = nums2;
		this.countMap = new Map();

		for (const num of nums2) {
			this.countMap.set(num, (this.countMap.get(num) || 0) + 1);
		}
	}

	add(index: number, val: number): void {
		const oldValue = this.nums2[index];
		this.nums2[index] += val;

		const count = this.countMap.get(oldValue)!;

		if (count === 1) {
			this.countMap.delete(oldValue);
		} else {
			this.countMap.set(oldValue, count - 1);
		}

		this.countMap.set(this.nums2[index], (this.countMap.get(this.nums2[index]) || 0) + 1);
	}

	count(tot: number): number {
		return this.nums1.reduce((acc, num) => acc + (this.countMap.get(tot - num) || 0), 0);
	}
}
