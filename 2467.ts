function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
	const nodeToParent = new Map<number, number>();
	const parentToChildren = new Map<number, number[]>();

	// Build the tree, edges are undirected
	while (nodeToParent.size < amount.length - 1) {
		for (const [a, b] of edges) {
			if (a === 0) {
				nodeToParent.set(b, a);
			} else if (b === 0) {
				nodeToParent.set(a, b);
			} else if (nodeToParent.has(a) && !nodeToParent.has(b)) {
				nodeToParent.set(b, a);
			} else if (nodeToParent.has(b) && !nodeToParent.has(a)) {
				nodeToParent.set(a, b);
			}
		}
	}

	for (const [node, parent] of nodeToParent) {
		if (!parentToChildren.has(parent)) {
			parentToChildren.set(parent, []);
		}
		parentToChildren.get(parent).push(node);
	}

	const nodeToEmptied = new Map<number, number>();
	let bobPosition = bob;
	let turn = 0;

	while (bobPosition !== undefined) {
		nodeToEmptied.set(bobPosition, turn);
		bobPosition = nodeToParent.get(bobPosition);
		turn++;
	}

	function preorderTraversal(node: number, turn: number): number {
		let income = amount[node];

		if (nodeToEmptied.has(node)) {
			const emptiedTurn = nodeToEmptied.get(node);

			if (turn > emptiedTurn) {
				income = 0;
			} else if (turn == emptiedTurn) {
				income /= 2;
			}
		}

		if (!parentToChildren.has(node)) {
			return income;
		}

		const profits = parentToChildren.get(node).map((child) => [child, preorderTraversal(child, turn + 1)]);

		return Math.max(...profits.map((child) => child[1])) + income;
	}

	return preorderTraversal(0, 0);
}

test('mostProfitablePath', () => {
	expect(
		mostProfitablePath(
			[
				[0, 1],
				[1, 2],
				[1, 3],
				[3, 4],
			],
			3,
			[-2, 4, 2, -4, 6],
		),
	).toBe(6);
	expect(mostProfitablePath([[0, 1]], 1, [-7280, 2350])).toBe(-7280);
	expect(
		mostProfitablePath(
			[
				[0, 2],
				[0, 5],
				[1, 3],
				[1, 5],
				[2, 4],
			],
			4,
			[5018, 8388, 6224, 3466, 3808, 3456],
		),
	).toBe(20328);
});
