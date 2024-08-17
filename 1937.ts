function maxPoints(points: number[][]): number {
	const m = points[0].length;

	return Math.max(
		...points.slice(1).reduce((prev, points) => {
			const leftMax = new Array(m).fill(0);
			const rightMax = new Array(m).fill(0);
			const curr = new Array(m).fill(0);

			leftMax[0] = prev[0];

			for (let j = 1; j < leftMax.length; j++) {
				leftMax[j] = Math.max(leftMax[j - 1] - 1, prev[j]);
			}

			rightMax[rightMax.length - 1] = prev[prev.length - 1];
			for (let j = rightMax.length - 2; j >= 0; j--) {
				rightMax[j] = Math.max(rightMax[j + 1] - 1, prev[j]);
			}

			for (let j = 0; j < curr.length; j++) {
				curr[j] = points[j] + Math.max(leftMax[j], rightMax[j]);
			}

			return curr;
		}, points[0]),
	);
}

test('maxPoints', () => {
	expect(
		maxPoints([
			[1, 2, 3],
			[1, 5, 1],
			[3, 1, 1],
		]),
	).toBe(9);
	expect(
		maxPoints([
			[1, 5],
			[2, 3],
			[4, 2],
		]),
	).toBe(11);
});
