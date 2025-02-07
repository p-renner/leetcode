function queryResults(limit: number, queries: number[][]): number[] {
	const colors = new Map<number, number>();
	const balls = new Map<number, number>();
	const res: number[] = [];

	for (let i = 0; i < queries.length; i++) {
		const [ball, color] = queries[i];

		if (balls.has(ball)) {
			const ballColor = balls.get(ball);

			if (ballColor == color) {
				res.push(colors.size);
				continue;
			}

			const colorCount = colors.get(ballColor);

			if (colorCount == 1) {
				colors.delete(ballColor);
			} else {
				colors.set(ballColor, colorCount - 1);
			}
		}

		balls.set(ball, color);
		colors.set(color, (colors.get(color) || 0) + 1);
		res[i] = colors.size;
	}

	return res;
}

test('queryResults', () => {
	expect(
		queryResults(4, [
			[1, 4],
			[2, 5],
			[1, 3],
			[3, 4],
		]),
	).toStrictEqual([1, 2, 2, 3]);
	expect(
		queryResults(4, [
			[0, 1],
			[1, 2],
			[2, 2],
			[3, 4],
			[4, 5],
		]),
	).toStrictEqual([1, 2, 2, 3, 4]);
});
