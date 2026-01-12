import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

function maximumHappinessSum(happiness: number[], k: number): number {
	const pq = new MaxPriorityQueue<number>();

	for (const h of happiness) {
		pq.push(h);
	}

	let totalHappinessSum = 0;
	let turns = 0;

	for (let i = 0; i < k; i++) {
		totalHappinessSum += Math.max(pq.pop()! - turns, 0);
		turns++;
	}

	return totalHappinessSum;
}

describe('maximumHappinessSum', () => {
	test('case 1', () => {
		expect(maximumHappinessSum([1, 2, 3], 2)).toBe(4);
	});

	test('case 2', () => {
		expect(maximumHappinessSum([1, 1, 1, 1], 2)).toBe(1);
	});

	test('case 5', () => {
		expect(maximumHappinessSum([2, 3, 4, 5], 1)).toBe(5);
	});
});
