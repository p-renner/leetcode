function largestSubmatrix(matrix: number[][]): number {
	const onesEndingAtI: number[][] = Array.from({ length: matrix.length }, () => []);

	for (let i = 0; i < matrix[0].length; i++) {
		let ones = 0;

		for (let j = 0; j < matrix.length; j++) {
			if (matrix[j][i] == 0) {
				ones = 0;
			} else {
				ones++;
				onesEndingAtI[j].push(ones);
			}
		}
	}

	let res = 0;

	for (let i = 0; i < onesEndingAtI.length; i++) {
		const curr = onesEndingAtI[i].sort((a, b) => a - b);
		let prev = 0;

		for (let j = 0; j < curr.length; j++) {
			if (prev != curr[j]) {
				res = Math.max(res, curr[j] * (curr.length - j));
				prev = curr[j];
			}
		}
	}

	return res;
}

describe('largestSubmatrix', () => {
	test('case 1', () => {
		expect(
			largestSubmatrix([
				[0, 0, 1],
				[1, 1, 1],
				[1, 0, 1],
			]),
		).toBe(4);
	});
	test('case 2', () => {
		expect(largestSubmatrix([[1, 0, 1, 0, 1]])).toBe(3);
	});
	test('case 3', () => {
		expect(
			largestSubmatrix([
				[1, 1, 0],
				[1, 0, 1],
			]),
		).toBe(2);
	});
	test('case 4', () => {
		expect(
			largestSubmatrix([
				[0, 0],
				[0, 0],
			]),
		).toBe(0);
	});
	test('case 5', () => {
		expect(
			largestSubmatrix([
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
				[0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
			]),
		).toBe(34);
	});
});
