import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function leftmostBuildingQueries(heights: number[], queries: number[][]): number[] {
	const ans = new Array(queries.length).fill(-1);

	const remain = Array.from({ length: heights.length }, () => []);

	for (let i = 0; i < queries.length; i++) {
		const [a, b] = queries[i].sort((a, b) => a - b);

		if (a === b) {
			ans[i] = b;
			continue;
		}

		if (heights[a] < heights[b]) {
			ans[i] = b;
			continue;
		}

		remain[b].push({
			height: Math.max(heights[a], heights[b]),
			i: i,
		});
	}

	const pq = new MinPriorityQueue({
		priority: (item) => item.height,
	});

	for (let j = 0; j < heights.length; j++) {
		while (!pq.isEmpty() && pq.front().element.height < heights[j]) {
			ans[pq.dequeue().element.i] = j;
		}

		for (const r of remain[j]) {
			pq.enqueue(r);
		}
	}

	return ans;
}

test('leftmostBuildingQueries', () => {
	expect(
		leftmostBuildingQueries(
			[6, 4, 8, 5, 2, 7],
			[
				[0, 1],
				[0, 3],
				[2, 4],
				[3, 4],
				[2, 2],
			],
		),
	).toStrictEqual([2, 5, -1, 5, 2]);
	expect(
		leftmostBuildingQueries(
			[5, 3, 8, 2, 6, 1, 4, 6],
			[
				[0, 7],
				[3, 5],
				[5, 2],
				[3, 0],
				[1, 6],
			],
		),
	).toStrictEqual([7, 6, -1, 4, 6]);
});
