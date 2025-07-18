import { MaxPriorityQueue, MinPriorityQueue } from '@datastructures-js/priority-queue';

function minimumDifference(nums: number[]): number {
	const n = nums.length / 3;
	const sums1: number[] = new Array(n + 1).fill(0);
	const left = new MaxPriorityQueue<number>();
	let sum = 0;

	for (let i = 0; i < n; i++) {
		left.enqueue(nums[i]);
		sum += nums[i];
	}
	sums1[0] = sum;

	for (let i = n; i < 2 * n; i++) {
		sum += nums[i];
		left.enqueue(nums[i]);
		sum -= left.dequeue();
		sums1[i - (n - 1)] = sum;
	}

	let sum2 = 0;
	const right = new MinPriorityQueue<number>();
	for (let i = n * 3 - 1; i >= 2 * n; i--) {
		right.enqueue(nums[i]);
		sum2 += nums[i];
	}

	sums1[n] = sums1[n] - sum2;
	for (let i = n * 2 - 1; i >= n; i--) {
		sum2 += nums[i];
		right.enqueue(nums[i]);
		sum2 -= right.dequeue();
		sums1[i - n] -= sum2;
	}

	return Math.min(...sums1);
}

test('minimumDifference', () => {
	expect(minimumDifference([3, 1, 2])).toBe(-1);
	expect(minimumDifference([7, 9, 5, 8, 1, 3])).toBe(1);
});
