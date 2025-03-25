function checkValidCuts(n: number, rectangles: number[][]): boolean {
	const xCoords = rectangles.map((rect) => [rect[0], rect[2]]);

	if (checkCuts(xCoords)) {
		return true;
	}

	const yCoords = rectangles.map((rect) => [rect[1], rect[3]]);

	return checkCuts(yCoords);

	function checkCuts(rectangles: number[][]): boolean {
		rectangles.sort((a, b) => a[0] - b[0]);

		let maxEnd = rectangles[0][1];
		let cuts = 0;

		for (let i = 1; i < rectangles.length; i++) {
			const [start, end] = rectangles[i];

			if (start < maxEnd) {
				maxEnd = Math.max(end, maxEnd);

				if (maxEnd == n) {
					break;
				}
				continue;
			}

			cuts++;
			maxEnd = end;

			if (cuts == 2) {
				return true;
			}
		}

		return false;
	}
}

test('checkValidCuts', () => {
	expect(
		checkValidCuts(5, [
			[1, 0, 5, 2],
			[0, 2, 2, 4],
			[3, 2, 5, 3],
			[0, 4, 4, 5],
		]),
	).toBe(true);
	expect(
		checkValidCuts(4, [
			[0, 0, 1, 1],
			[2, 0, 3, 4],
			[0, 2, 2, 3],
			[3, 0, 4, 3],
		]),
	).toBe(true);
	expect(
		checkValidCuts(4, [
			[0, 2, 2, 4],
			[1, 0, 3, 2],
			[2, 2, 3, 4],
			[3, 0, 4, 2],
			[3, 2, 4, 4],
		]),
	).toBe(false);
});
