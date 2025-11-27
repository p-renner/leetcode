import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

function maxKelements(nums: number[], k: number): number {
	const pq = new MaxPriorityQueue<number>();
	let score = 0;

	for (const num of nums) {
		pq.enqueue(num);
	}

	for (let i = 0; i < k; i++) {
		const max = pq.dequeue();
		score += max;
		pq.enqueue(Math.ceil(max / 3));
	}

	return score;
}

test('maxKelements', () => {
	expect(maxKelements([10, 10, 10, 10, 10], 5)).toBe(50);
	expect(maxKelements([1, 10, 3, 3, 3], 3)).toBe(17);
});
