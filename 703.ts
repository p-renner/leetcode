import { MinPriorityQueue } from '@datastructures-js/priority-queue';

class KthLargest {
	heap: MinPriorityQueue<number>;
	k: number;

	constructor(k: number, nums: number[]) {
		this.heap = new MinPriorityQueue();
		this.k = k;

		for (const num of nums) {
			this.add(num);
		}
	}

	add(val: number): number {
		if (this.heap.size() < this.k || this.heap.front().element < val) {
			this.heap.enqueue(val);
			if (this.heap.size() > this.k) {
				this.heap.dequeue();
			}
		}
		return this.heap.front().element;
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
