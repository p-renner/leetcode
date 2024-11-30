function validArrangement(pairs: number[][]): number[][] {
	const adjs = new Map<number, number[]>();
	const inOut = new Map<number, number>();

	for (const [start, end] of pairs) {
		if (!adjs.has(start)) {
			adjs.set(start, []);
		}

		adjs.get(start)!.push(end);
		inOut.set(start, (inOut.get(start) || 0) + 1);
		inOut.set(end, (inOut.get(end) || 0) - 1);
	}

	let startNode = pairs[0][0];
	for (const [node, degree] of inOut.entries()) {
		if (degree === 1) {
			startNode = node;
			break;
		}
	}

	const path = [];
	const nodes = [startNode];

	while (nodes.length > 0) {
		const neighbors = adjs.get(nodes[nodes.length - 1]) || [];

		if (neighbors.length === 0) {
			path.push(nodes.pop()!);
		} else {
			const nextNode = neighbors.pop()!;
			nodes.push(nextNode);
		}
	}

	const arrangement = [];

	for (let i = path.length - 1; i > 0; --i) {
		arrangement.push([path[i], path[i - 1]]);
	}

	return arrangement;
}

test('validArrangement', () => {
	expect(
		validArrangement([
			[5, 1],
			[4, 5],
			[11, 9],
			[9, 4],
		]),
	).toStrictEqual([
		[11, 9],
		[9, 4],
		[4, 5],
		[5, 1],
	]);
	expect(
		validArrangement([
			[1, 3],
			[3, 2],
			[2, 1],
		]),
	).toStrictEqual([
		[1, 3],
		[3, 2],
		[2, 1],
	]);
	expect(
		validArrangement([
			[1, 2],
			[1, 3],
			[2, 1],
		]),
	).toStrictEqual([
		[1, 2],
		[2, 1],
		[1, 3],
	]);
});
