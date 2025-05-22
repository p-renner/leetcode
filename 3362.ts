import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

function maxRemoval(nums: number[], queries: number[][]): number {
	queries.sort((a, b) => a[0] - b[0]);
	const heap = new MaxPriorityQueue<number>();
	const deltaArray: number[] = new Array(nums.length + 1).fill(0);
	let operations = 0;

	for (let i = 0, j = 0; i < nums.length; i++) {
		operations += deltaArray[i];
		while (j < queries.length && queries[j][0] === i) {
			heap.enqueue(queries[j][1]);
			j++;
		}
		while (operations < nums[i] && !heap.isEmpty() && heap.front().element >= i) {
			operations += 1;
			deltaArray[heap.dequeue().element + 1] -= 1;
		}
		if (operations < nums[i]) {
			return -1;
		}
	}
	return heap.size();
}

test('maxRemoval', () => {
	expect(
		maxRemoval(
			[2, 0, 2],
			[
				[0, 2],
				[0, 2],
				[1, 1],
			],
		),
	).toBe(1);
	expect(
		maxRemoval(
			[1, 1, 1, 1],
			[
				[1, 3],
				[0, 2],
				[1, 3],
				[1, 2],
			],
		),
	).toBe(2);
	expect(maxRemoval([1, 2, 3, 4], [[0, 3]])).toBe(-1);
});
