import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

function maxAverageRatio(classes: number[][], extraStudents: number): number {
	const queue = new MaxPriorityQueue({
		priority([pass, total]) {
			const gain = (pass + 1) / (total + 1) - pass / total;
			return Math.round(gain * 10 ** 7);
		},
	});

	for (const c of classes) {
		queue.enqueue(c);
	}

	for (let i = 0; i < extraStudents; i++) {
		const [pass, total] = queue.dequeue().element as [number, number];
		queue.enqueue([pass + 1, total + 1]);
	}

	return queue.toArray().reduce((acc, curr) => acc + curr.element[0] / curr.element[1], 0) / queue.size();
}

test('maxAverageRatio', () => {
	expect(
		maxAverageRatio(
			[
				[1, 2],
				[3, 5],
				[2, 2],
			],
			2,
		),
	).toBe(0.7833333333333333);
});
