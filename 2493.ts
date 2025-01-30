function magnificentSets(n: number, edges: number[][]): number {
	const adjList = Array.from({ length: n }, () => []);
	const parent = new Array(n).fill(-1);
	const depth = new Array(n).fill(0);

	for (const [u, v] of edges) {
		adjList[u - 1].push(v - 1);
		adjList[v - 1].push(u - 1);
		union(u - 1, v - 1);
	}

	const numOfGroupsForComponent = new Map<number, number>();

	for (let node = 0; node < n; node++) {
		const numberOfGroups = getNumberOfGroups(adjList, node, n);

		if (numberOfGroups == -1) {
			return -1;
		}

		const rootNode = find(node);
		numOfGroupsForComponent.set(rootNode, Math.max(numOfGroupsForComponent.get(rootNode) ?? 0, numberOfGroups));
	}

	return [...numOfGroupsForComponent.values()].reduce((acc, curr) => acc + curr, 0);

	function getNumberOfGroups(adjList: number[][], srcNode: number, n: number): number {
		const nodesQueue = [srcNode];
		const layerSeen = new Array(n).fill(-1);
		layerSeen[srcNode] = 0;
		let deepestLayer = 0;

		while (nodesQueue.length) {
			const numNodesInLayer = nodesQueue.length;

			for (let i = 0; i < numNodesInLayer; i++) {
				const currentNode = nodesQueue.shift();

				for (const neighbor of adjList[currentNode]) {
					if (layerSeen[neighbor] == -1) {
						layerSeen[neighbor] = deepestLayer + 1;
						nodesQueue.push(neighbor);
					} else if (layerSeen[neighbor] == deepestLayer) {
						return -1;
					}
				}
			}

			deepestLayer += 1;
		}

		return deepestLayer;
	}

	function union(u: number, v: number) {
		let node1 = find(u);
		let node2 = find(v);

		if (node1 == node2) {
			return;
		}

		if (depth[node1] < depth[node2]) {
			[node1, node2] = [node2, node1];
		}
		parent[node2] = node1;

		if (depth[node1] == depth[node2]) {
			depth[node1] += 1;
		}
	}

	function find(u: number): number {
		while (parent[u] != -1) {
			u = parent[u];
		}

		return u;
	}
}

test('magnificentSets', () => {
	expect(
		magnificentSets(6, [
			[1, 2],
			[1, 4],
			[1, 5],
			[2, 6],
			[2, 3],
			[4, 6],
		]),
	).toBe(4);
	expect(
		magnificentSets(3, [
			[1, 2],
			[2, 3],
			[3, 1],
		]),
	).toBe(-1);
});
