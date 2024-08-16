function maxDistance(arrays: number[][]): number {
	return arrays
		.slice(1)
		.reduce(
			([dist, min, max], arr) => [
				Math.max(dist, Math.abs(arr[arr.length - 1] - min), Math.abs(max - arr[0])),
				Math.min(min, arr[0]),
				Math.max(max, arr[arr.length - 1]),
			],
			[0, arrays[0][0], arrays[0][arrays[0].length - 1]],
		)[0];
}

test('maxDistance', () => {
	expect(
		maxDistance([
			[1, 2, 3],
			[4, 5],
			[1, 2, 3],
		]),
	).toBe(4);
	expect(maxDistance([[1], [1]])).toBe(0);
	expect(
		maxDistance([
			[-1, 1],
			[-3, 1, 4],
			[-2, -1, 0, 2],
		]),
	).toBe(6);
	expect(maxDistance([[1], [2]])).toBe(1);
	expect(
		maxDistance([
			[1, 5],
			[3, 4],
		]),
	).toBe(3);
});
