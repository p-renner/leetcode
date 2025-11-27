import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

function pickGifts(gifts: number[], k: number): number {
	const maxHeap = new MaxPriorityQueue<number>();
	for (let gift of gifts) {
		maxHeap.enqueue(gift);
	}

	for (let i = 0; i < k; i++) {
		const maxGifts = maxHeap.dequeue();
		const root = Math.floor(Math.sqrt(maxGifts));
		maxHeap.enqueue(root);
	}

	return maxHeap.toArray().reduce((acc, curr) => acc + curr, 0);
}

test('pickGifts', () => {
	expect(pickGifts([25, 64, 9, 4, 100], 4)).toBe(29);
	expect(pickGifts([1, 1, 1, 1], 4)).toBe(4);
});
