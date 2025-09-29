function largestTriangleArea(points: number[][]): number {
	let maxArea = 0;
	const n = points.length;

	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			for (let k = j + 1; k < n; k++) {
				const area = triangleArea(points[i], points[j], points[k]);
				maxArea = Math.max(maxArea, area);
			}
		}
	}

	return maxArea;
}

function triangleArea(point1: number[], point2: number[], point3: number[]): number {
	return (
		0.5 *
		Math.abs(
			point1[0] * (point2[1] - point3[1]) +
				point2[0] * (point3[1] - point1[1]) +
				point3[0] * (point1[1] - point2[1]),
		)
	);
}

test('largestTriangleArea', () => {
	expect(
		largestTriangleArea([
			[0, 0],
			[0, 1],
			[1, 0],
			[0, 2],
			[2, 0],
		]),
	).toBe(2);
	expect(
		largestTriangleArea([
			[1, 0],
			[0, 0],
			[0, 1],
		]),
	).toBe(0.5);
});
