function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
	const visited = [[rStart, cStart]];
	let step = 1;
	let dir = 0;

	while (visited.length < rows * cols) {
		for (let i = 0; i < step; i++) {
			if (dir === 0) {
				cStart++;
			} else if (dir === 1) {
				rStart++;
			} else if (dir === 2) {
				cStart--;
			} else {
				rStart--;
			}

			if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
				visited.push([rStart, cStart]);
			}
		}

		dir = (dir + 1) % 4;

		if (dir === 0 || dir === 2) {
			step++;
		}
	}
	return visited;
}

test('spiralMatrixIII', () => {
	expect(spiralMatrixIII(1, 4, 0, 0)).toStrictEqual([
		[0, 0],
		[0, 1],
		[0, 2],
		[0, 3],
	]);
	expect(spiralMatrixIII(5, 6, 1, 4)).toStrictEqual([
		[1, 4],
		[1, 5],
		[2, 5],
		[2, 4],
		[2, 3],
		[1, 3],
		[0, 3],
		[0, 4],
		[0, 5],
		[3, 5],
		[3, 4],
		[3, 3],
		[3, 2],
		[2, 2],
		[1, 2],
		[0, 2],
		[4, 5],
		[4, 4],
		[4, 3],
		[4, 2],
		[4, 1],
		[3, 1],
		[2, 1],
		[1, 1],
		[0, 1],
		[4, 0],
		[3, 0],
		[2, 0],
		[1, 0],
		[0, 0],
	]);
});
