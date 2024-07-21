function buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {
	const matrix: number[][] = Array.from({ length: k }, () => Array(k).fill(0));

	function topoSort(cond: number[][]): number[] {
		const adj: Map<number, number[]> = new Map();
		const deg: number[] = Array.from({ length: k }, () => 0);

		for (const [before, after] of cond) {
			if (!adj.has(before)) {
				adj.set(before, []);
			}
			adj.get(before).push(after);
			deg[after - 1]++;
		}

		const queue: number[] = [];
		for (let i = 0; i < k; i++) {
			if (deg[i] === 0) {
				queue.push(i + 1);
			}
		}

		const order: number[] = [];
		while (queue.length > 0) {
			const tmp = queue.shift()!;
			order.push(tmp);

			if (adj.has(tmp)) {
				for (const child of adj.get(tmp)!) {
					deg[child - 1]--;
					if (deg[child - 1] === 0) {
						queue.push(child);
					}
				}
			}
		}

		return order;
	}

	const [rowC, colC] = [topoSort(rowConditions), topoSort(colConditions)];

	if (rowC.length < k || colC.length < k) {
		return [];
	}

	for (const [row, val] of rowC.entries()) {
		const col = colC.indexOf(val);
		matrix[row][col] = val;
	}

	return matrix;
}

test('buildMatrix', () => {
	expect(
		buildMatrix(
			3,
			[
				[1, 2],
				[3, 2],
			],
			[
				[2, 1],
				[3, 2],
			],
		),
	).toStrictEqual([
		[0, 0, 1],
		[3, 0, 0],
		[0, 2, 0],
	]);
	expect(
		buildMatrix(
			3,
			[
				[1, 2],
				[2, 3],
				[3, 1],
				[2, 3],
			],
			[[2, 1]],
		),
	).toStrictEqual([]);
});
