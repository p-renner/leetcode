class NumberContainers {
	private numToIndexes: Map<number, Set<number>>;
	private indexToNum: Map<number, number>;
	private memo: Map<number, number>;

	constructor() {
		this.numToIndexes = new Map();
		this.indexToNum = new Map();
		this.memo = new Map();
	}

	change(index: number, number: number): void {
		this.memo.delete(number);

		if (this.indexToNum.has(index)) {
			const oldNum = this.indexToNum.get(index);
			this.numToIndexes.get(oldNum).delete(index);
			this.memo.delete(oldNum);
		}

		this.indexToNum.set(index, number);

		if (!this.numToIndexes.has(number)) {
			this.numToIndexes.set(number, new Set());
		}

		this.numToIndexes.get(number).add(index);
	}

	find(number: number): number {
		if (this.memo.has(number)) {
			return this.memo.get(number);
		}

		if (!this.numToIndexes.has(number)) {
			return -1;
		}

		const set = this.numToIndexes.get(number);

		if (set.size == 0) {
			return -1;
		}

		const min = Math.min(...this.numToIndexes.get(number).values());
		this.memo.set(number, min);

		return min;
	}
}

test('NumberContainers', () => {
	const cont = new NumberContainers();
	expect(cont.find(10)).toBe(-1);
	cont.change(2, 10);
	cont.change(1, 10);
	cont.change(3, 10);
	cont.change(5, 10);
	expect(cont.find(10)).toBe(1);
	cont.change(1, 20);
	expect(cont.find(10)).toBe(2);
});
