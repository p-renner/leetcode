import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function getFinalState(nums: number[], k: number, multiplier: number): number[] {
	const pq = new MinPriorityQueue({
		priority: ([num, i]) => num * nums.length + i,
	});

	for (let i = 0; i < nums.length; i++) {
		pq.enqueue([nums[i], i]);
	}

	for (let i = 0; i < k; i++) {
		const [min, i] = pq.dequeue().element as [number, number];
		pq.enqueue([min * multiplier, i]);
	}

	const res = new Array(nums.length);

	while (pq.size() > 0) {
		const [num, i] = pq.dequeue().element as [number, number];
		res[i] = num;
	}

	return res;
}
