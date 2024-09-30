class CustomStack {
	private set: number[];
	private limit: number;

	constructor(maxSize: number) {
		this.set = [];
		this.limit = maxSize;
	}

	push(x: number): void {
		if (this.set.length < this.limit) {
			this.set.push(x);
		}
	}

	pop(): number {
		return this.set.pop() ?? -1;
	}

	increment(k: number, val: number): void {
		for (let i = 0; i < Math.min(k, this.set.length); i++) {
			this.set[i] += val;
		}
	}
}

test('CustomStack', () => {
	const stack = new CustomStack(3);
	stack.push(1);
	stack.push(2);
	expect(stack.pop()).toBe(2);
	stack.push(2);
	stack.push(3);
	stack.push(4);
	stack.increment(5, 100);
	stack.increment(2, 100);
	expect(stack.pop()).toBe(103);
	expect(stack.pop()).toBe(202);
	expect(stack.pop()).toBe(201);
	expect(stack.pop()).toBe(-1);
});
