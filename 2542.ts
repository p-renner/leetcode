import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function maxScore(nums1: number[], nums2: number[], k: number): number {
	const sorted = nums2.map((num, i) => [num, i]).sort((a, b) => b[0] - a[0]);

	const maxHeap = new MinPriorityQueue<number>();

	let sum = 0;
	for (let i = 0; i < k - 1; i++) {
		const index = sorted[i][1];
		maxHeap.push(nums1[index]);
		sum += nums1[index];
	}

	let res = 0;

	for (let i = k - 1; i < nums2.length; i++) {
		const [num, index] = sorted[i];
		maxHeap.push(nums1[index]);
		sum += nums1[index];

		if (maxHeap.size() > k) {
			sum -= maxHeap.pop();
		}

		res = Math.max(res, sum * num);
	}

	return res;
}

describe('maxScore', () => {
	test('case 1', () => {
		expect(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3)).toBe(12);
	});
	test('case 2', () => {
		expect(maxScore([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1)).toBe(30);
	});
});
