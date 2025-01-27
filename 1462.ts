function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
	const prereqs = new Map<number, Set<number>>();

	for (const [a, b] of prerequisites) {
		if (!prereqs.has(a)) {
			prereqs.set(a, new Set());
		}

		prereqs.get(a)!.add(b);
	}

	return queries.map(([a, b]) => {
		const visited = new Array(numCourses).fill(false);
		let queue = [a];

		while (queue.length > 0) {
			const curr = queue.pop()!;
			if (visited[curr]) {
				continue;
			}
			visited[curr] = true;

			const prereq = prereqs.get(curr);
			if (!prereq) {
				continue;
			}

			if (prereq.has(b)) {
				return true;
			}

			queue = queue.concat(...prereq.values());
		}

		return false;
	});
}

test('checkIfPrerequisite', () => {
	expect(
		checkIfPrerequisite(
			2,
			[[1, 0]],
			[
				[0, 1],
				[1, 0],
			],
		),
	).toStrictEqual([false, true]);
	expect(
		checkIfPrerequisite(
			2,
			[],
			[
				[1, 0],
				[0, 1],
			],
		),
	).toStrictEqual([false, false]);
	expect(
		checkIfPrerequisite(
			3,
			[
				[1, 2],
				[1, 0],
				[2, 0],
			],
			[
				[1, 0],
				[1, 2],
			],
		),
	).toStrictEqual([true, true]);
});
