function mostPoints(questions: number[][]): number {
	let points: number[] = new Array(questions.length).fill(0);

	for (let i = questions.length - 1; i >= 0; i--) {
		const [reward, next] = questions[i];

		points[i] = Math.max(reward + (points[i + 1 + next] || 0), points[i + 1] || 0);
	}

	return points[0];
}

test('description', () => {
	expect(
		mostPoints([
			[3, 2],
			[4, 3],
			[4, 4],
			[2, 5],
		]),
	).toBe(5);
	expect(
		mostPoints([
			[1, 1],
			[2, 2],
			[3, 3],
			[4, 4],
			[5, 5],
		]),
	).toBe(7);
});
