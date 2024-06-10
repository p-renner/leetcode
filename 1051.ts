function heightChecker(heights: number[]): number {
	const expected = [...heights].sort((a, b) => a - b);
	let count = 0;

	for (let i = 0; i < heights.length; i++) {
		if (heights[i] !== expected[i]) count++;
	}
	return count;
}

test('heightChecker', () => {
	expect(heightChecker([1, 1, 4, 2, 1, 3])).toBe(3);
	expect(heightChecker([5, 1, 2, 3, 4])).toBe(5);
	expect(heightChecker([1, 2, 3, 4, 5])).toBe(0);
});
