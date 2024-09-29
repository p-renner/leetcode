class OneNode {
	freq: number;
	prev: OneNode;
	next: OneNode;
	keys: Set<string>;

	constructor(freq: number) {
		this.freq = freq;
		this.keys = new Set<string>();
	}
}

class AllOne {
	private map: Map<string, OneNode>;
	private head: OneNode;
	private tail: OneNode;

	constructor() {
		this.head = new OneNode(0);
		this.tail = new OneNode(0);
		this.head.next = this.tail;
		this.tail.prev = this.head;
		this.map = new Map<string, OneNode>();
	}

	inc(key: string): void {
		if (this.map.has(key)) {
			const node = this.map.get(key);
			const freq = node.freq;
			node.keys.delete(key);

			const next = node.next;

			if (next == this.tail || next.freq != freq + 1) {
				const newNode = new OneNode(freq + 1);
				newNode.keys.add(key);
				newNode.prev = node;
				newNode.next = next;
				node.next = newNode;
				next.prev = newNode;
				this.map.set(key, newNode);
			} else {
				next.keys.add(key);
				this.map.set(key, next);
			}

			if (node.keys.size == 0) {
				this.removeNode(node);
			}
		} else {
			const first = this.head.next;

			if (first == this.tail || first.freq > 1) {
				const newNode = new OneNode(1);
				newNode.keys.add(key);
				newNode.prev = this.head;
				newNode.next = first;
				this.head.next = newNode;
				first.prev = newNode;
				this.map.set(key, newNode);
			} else {
				first.keys.add(key);
				this.map.set(key, first);
			}
		}
	}

	dec(key: string): void {
		if (!this.map.has(key)) {
			return;
		}

		const node = this.map.get(key);
		node.keys.delete(key);
		const freq = node.freq;

		if (freq == 1) {
			this.map.delete(key);
		} else {
			const prev = node.prev;

			if (prev == this.head || prev.freq != freq - 1) {
				const newNode = new OneNode(freq - 1);
				newNode.keys.add(key);
				newNode.prev = prev;
				newNode.next = node;
				prev.next = newNode;
				node.prev = newNode;
				this.map.set(key, newNode);
			} else {
				prev.keys.add(key);
				this.map.set(key, prev);
			}
		}

		if (node.keys.size == 0) {
			this.removeNode(node);
		}
	}

	getMaxKey(): string {
		if (this.tail.prev == this.head) {
			return '';
		}

		return Array.from(this.tail.prev.keys.values())[0];
	}

	getMinKey(): string {
		if (this.head.next == this.tail) {
			return '';
		}

		return Array.from(this.head.next.keys.values())[0];
	}

	removeNode(node: OneNode): void {
		const prev = node.prev;
		const next = node.next;

		prev.next = next;
		next.prev = prev;
	}
}

test('AllOne', () => {
	const obj = new AllOne();
	obj.inc('hello');
	obj.inc('hello');
	expect(obj.getMaxKey()).toBe('hello');
	expect(obj.getMinKey()).toBe('hello');
	obj.inc('leet');
	expect(obj.getMaxKey()).toBe('hello');
	expect(obj.getMinKey()).toBe('leet');
});
