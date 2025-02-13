import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function minOperations(nums: number[], k: number): number {
	const queue = new MinPriorityQueue();

	for (let i = 0; i < nums.length; i++) {
		queue.enqueue(nums[i]);
	}

	let [x, y] = [0, 0];
	let operations = 0;

	while (queue.size() >= 2 && (queue.front().element as number) < k) {
		[x, y] = [queue.dequeue().element, queue.dequeue().element] as [number, number];
		queue.enqueue(x * 2 + y);
		operations++;
	}

	return operations;
}
