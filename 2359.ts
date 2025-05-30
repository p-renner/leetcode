function closestMeetingNode(edges: number[], node1: number, node2: number): number {
	const max1 = new Array(edges.length).fill(Infinity);
	const max2 = new Array(edges.length).fill(Infinity);
	let dist = 0;

	while (node1 != -1 && max1[node1] === Infinity) {
		max1[node1] = dist++;
		node1 = edges[node1];
	}

	dist = 0;

	while (node2 != -1 && max2[node2] === Infinity) {
		max2[node2] = dist++;
		node2 = edges[node2];
	}

	let result = -1;
	let minMaxDist = Infinity;

	for (let i = 0; i < edges.length; i++) {
		const maxDist = Math.max(max1[i], max2[i]);

		if (maxDist < minMaxDist) {
			minMaxDist = maxDist;
			result = i;
		}
	}

	return result;
}

test('closestMeetingNode', () => {
	expect(closestMeetingNode([2, 2, 3, -1], 0, 1)).toBe(2);
	expect(closestMeetingNode([1, 2, -1], 0, 2)).toBe(2);
});
