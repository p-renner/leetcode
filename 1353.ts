import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function maxEvents(events: number[][]): number {
	events.sort(([sA, eA], [sB, eB]) => {
		if (sA == sB) {
			return eA - eB;
		}

		return sA - sB;
	});

	const maxDay = Math.max(...events.map(([_, e]) => e));
	const queue = new MinPriorityQueue<number>();
	let j = 0;
	let res = 0;

	for (let i = 1; i <= maxDay; i++) {
		while (j < events.length && events[j][0] <= i) {
			queue.push(events[j][1]);
			j++;
		}

		while (!queue.isEmpty() && queue.front() < i) {
			queue.dequeue();
		}

		if (queue.isEmpty()) {
			continue;
		}

		queue.dequeue();
		res++;
	}

	return res;
}

test('maxEvents', () => {
	expect(
		maxEvents([
			[1, 2],
			[2, 3],
			[3, 4],
		]),
	).toBe(3);
	expect(
		maxEvents([
			[1, 2],
			[2, 3],
			[3, 4],
			[1, 2],
		]),
	).toBe(4);
	expect(
		maxEvents([
			[1, 4],
			[4, 4],
			[2, 2],
			[3, 4],
			[1, 1],
		]),
	).toBe(4);
	expect(
		maxEvents([
			[1, 2],
			[1, 2],
			[3, 3],
			[1, 5],
			[1, 5],
		]),
	).toBe(5);
});
