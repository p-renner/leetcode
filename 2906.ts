function constructProductMatrix(grid: number[][]): number[][] {
	const suffixRow = Array.from({ length: grid.length }, () => []);
	const prefixRow = Array.from({ length: grid.length }, () => []);

	const suffixColumn = new Array<number>(grid.length);
	const prefixColumn = new Array<number>(grid.length);

	for (let i = 0; i < grid.length; i++) {
		let sum = 1;

		for (let j = 0; j < grid[0].length; j++) {
			sum = (sum * grid[i][j]) % 12345;
			suffixRow[i][j] = sum;
		}
	}

	for (let i = 0; i < grid.length; i++) {
		let sum = 1;

		for (let j = grid[0].length - 1; j >= 0; j--) {
			sum = (sum * grid[i][j]) % 12345;
			prefixRow[i][j] = sum;
		}
	}

	let sum = 1;
	for (let i = 0; i < grid.length; i++) {
		sum = (sum * suffixRow[i][grid[0].length - 1]) % 12345;
		suffixColumn[i] = sum;
	}

	sum = 1;
	for (let i = grid.length - 1; i >= 0; i--) {
		sum = (sum * suffixRow[i][grid[0].length - 1]) % 12345;
		prefixColumn[i] = sum;
	}

	const res = Array.from({ length: grid.length }, () => []);

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			let product = 1;

			if (i > 0) {
				product = (product * suffixColumn[i - 1]) % 12345;
			}

			if (i < grid.length - 1) {
				product = (product * prefixColumn[i + 1]) % 12345;
			}

			if (j > 0) {
				product = (product * suffixRow[i][j - 1]) % 12345;
			}

			if (j < grid[0].length - 1) {
				product = (product * prefixRow[i][j + 1]) % 12345;
			}

			res[i][j] = product;
		}
	}

	return res;
}

describe('constructProductMatrix', () => {
	test('case 1', () => {
		expect(
			constructProductMatrix([
				[1, 2],
				[3, 4],
			]),
		).toEqual([
			[24, 12],
			[8, 6],
		]);
	});
	test('case 2', () => {
		expect(constructProductMatrix([[12345], [2], [1]])).toEqual([[2], [0], [0]]);
	});
	test('case 3', () => {
		expect(constructProductMatrix([[6], [8], [2], [12], [6], [4]])).toEqual([
			[4608],
			[3456],
			[1479],
			[2304],
			[4608],
			[6912],
		]);
	});
});
