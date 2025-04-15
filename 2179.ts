class FenwickTree {
	private tree: number[];

	constructor(size: number) {
		this.tree = new Array(size + 1).fill(0);
	}

	update(index: number, delta: number): void {
		index++;
		while (index < this.tree.length) {
			this.tree[index] += delta;
			index += index & -index;
		}
	}

	query(index: number): number {
		index++;
		let res = 0;
		while (index > 0) {
			res += this.tree[index];
			index -= index & -index;
		}
		return res;
	}
}

function goodTriplets(nums1: number[], nums2: number[]): number {
	const n = nums1.length;
	const pos2 = new Array(n),
		reversedIndexMapping = new Array(n);
	for (let i = 0; i < n; i++) {
		pos2[nums2[i]] = i;
	}
	for (let i = 0; i < n; i++) {
		reversedIndexMapping[pos2[nums1[i]]] = i;
	}
	const tree = new FenwickTree(n);
	let res = 0;

	for (let value = 0; value < n; value++) {
		const pos = reversedIndexMapping[value];
		const left = tree.query(pos);
		tree.update(pos, 1);
		const right = n - 1 - pos - (value - left);
		res += left * right;
	}

	return res;
}

test('goodTriplets', () => {
	expect(goodTriplets([2, 0, 1, 3], [0, 1, 2, 3])).toBe(1);
	expect(goodTriplets([4, 0, 1, 3, 2], [4, 1, 0, 2, 3])).toBe(4);
	expect(
		goodTriplets(
			[13, 14, 10, 2, 12, 3, 9, 11, 15, 8, 4, 7, 0, 6, 5, 1],
			[8, 7, 9, 5, 6, 14, 15, 10, 2, 11, 4, 13, 3, 12, 1, 0],
		),
	).toBe(77);
});
