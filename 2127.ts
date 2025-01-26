function maximumInvitations(favorite: number[]): number {
	const n = favorite.length;
	const graph = new Map<number, number[]>();

	for (let i = 0; i < favorite.length; i++) {
		if (!graph.has(favorite[i])) {
			graph.set(favorite[i], []);
		}

		graph.get(favorite[i])!.push(i);
	}

	function dfs(node: number, visited: Set<number>): number {
		const queue = [[node, 0]];
		let maxDistance = 0;

		while (queue.length > 0) {
			const [curr, dist] = queue.shift()!;

			for (const neighbor of graph.get(curr) || []) {
				if (visited.has(neighbor)) {
					continue;
				}
				visited.add(neighbor);
				queue.push([neighbor, dist + 1]);
				maxDistance = Math.max(maxDistance, dist + 1);
			}
		}

		return maxDistance;
	}

	let res = 0;
	let twoCycle = 0;
	const visited = new Set<number>();

	for (let i = 0; i < n; i++) {
		if (visited.has(i)) {
			continue;
		}

		const visitedPersons = new Map<number, number>();
		let currPerson = i;
		let distance = 0;

		while (true) {
			if (visited.has(currPerson)) {
				break;
			}

			visited.add(currPerson);
			visitedPersons.set(currPerson, distance);
			distance++;
			const nextPerson = favorite[currPerson];

			if (visitedPersons.has(nextPerson)) {
				const cycleLength = distance - visitedPersons.get(nextPerson)!;
				res = Math.max(res, cycleLength);

				if (cycleLength === 2) {
					const visitedNodes = new Set<number>([currPerson, nextPerson]);
					twoCycle += 2 + dfs(nextPerson, visitedNodes) + dfs(currPerson, visitedNodes);
				}

				break;
			}

			currPerson = nextPerson;
		}
	}

	return Math.max(res, twoCycle);
}

test('maximumInvitations', () => {
	expect(maximumInvitations([2, 2, 1, 2])).toBe(3);
	expect(maximumInvitations([1, 2, 0])).toBe(3);
	expect(maximumInvitations([3, 0, 1, 4, 1])).toBe(4);
});
