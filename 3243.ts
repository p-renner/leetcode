function shortestDistanceAfterQueries(n: number, queries: number[][]): number[] {
	const map = new Map<number, number>();
	const origin = new Map<number, number[]>();

	map.set(0, 0);
	for (let i = 1; i < n; i++) {
		map.set(i, i);
		origin.set(i, [i - 1]);
	}

	const res: number[] = [];

	for (const [u, v] of queries) {
		const newDist = Math.min(map.get(u) + 1, map.get(v));
		map.set(v, newDist);
		origin.get(v).push(u);

		let prev = newDist;

		for (let i = v + 1; i < n; i++) {
			map.set(i, Math.min(...origin.get(i).map((n) => map.get(n))) + 1);
			prev++;
		}
		res.push(map.get(n - 1));
	}

	return res;
}

test('shortestDistanceAfterQueries', () => {
	expect(
		shortestDistanceAfterQueries(5, [
			[2, 4],
			[0, 2],
			[0, 4],
		]),
	).toStrictEqual([3, 2, 1]);
	expect(
		shortestDistanceAfterQueries(4, [
			[0, 3],
			[0, 2],
		]),
	).toStrictEqual([1, 1]);
	expect(
		shortestDistanceAfterQueries(5, [
			[0, 2],
			[0, 4],
		]),
	).toStrictEqual([3, 1]);
});
