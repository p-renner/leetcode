class MyCircularDeque {
	private queue: number[];
	private capacity: number;

	constructor(k: number) {
		this.queue = new Array();
		this.capacity = k;
	}

	insertFront(value: number): boolean {
		if (this.isFull()) {
			return false;
		}

		this.queue.unshift(value);
		return true;
	}

	insertLast(value: number): boolean {
		if (this.isFull()) {
			return false;
		}

		this.queue.push(value);
		return true;
	}

	deleteFront(): boolean {
		return this.queue.shift() === undefined ? false : true;
	}

	deleteLast(): boolean {
		return this.queue.pop() === undefined ? false : true;
	}

	getFront(): number {
		if (this.isEmpty()) {
			return -1;
		}

		return this.queue[0];
	}

	getRear(): number {
		if (this.isEmpty()) {
			return -1;
		}

		return this.queue[this.queue.length - 1];
	}

	isEmpty(): boolean {
		return this.queue.length === 0;
	}

	isFull(): boolean {
		return this.queue.length === this.capacity;
	}
}

test('MyCircularDeque', () => {
	const obj = new MyCircularDeque(3);
	expect(obj.insertLast(1)).toBe(true);
	expect(obj.insertLast(2)).toBe(true);
	expect(obj.insertFront(3)).toBe(true);
	expect(obj.insertFront(4)).toBe(false);
	expect(obj.getRear()).toBe(2);
	expect(obj.isFull()).toBe(true);
	expect(obj.deleteLast()).toBe(true);
	expect(obj.insertFront(4)).toBe(true);
	expect(obj.getFront()).toBe(4);
});
