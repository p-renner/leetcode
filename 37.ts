function solveSudoku(board: string[][]): void {
	function isValid(board: string[][], row: number, col: number, num: string): boolean {
		for (let i = 0; i < 9; i++) {
			if (
				board[row][i] === num ||
				board[i][col] === num ||
				board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + (i % 3)] === num
			) {
				return false;
			}
		}
		return true;
	}

	function solve(board: string[][]): boolean {
		for (let row = 0; row < 9; row++) {
			for (let col = 0; col < 9; col++) {
				if (board[row][col] === '.') {
					for (let num = 1; num <= 9; num++) {
						const strNum = String(num);

						if (isValid(board, row, col, strNum)) {
							board[row][col] = strNum;

							if (solve(board)) {
								return true;
							}

							board[row][col] = '.';
						}
					}
					return false;
				}
			}
		}
		return true;
	}

	solve(board);
}

test('solveSudoku', () => {
	const board = [
		['5', '3', '.', '.', '7', '.', '.', '.', '.'],
		['6', '.', '.', '1', '9', '5', '.', '.', '.'],
		['.', '9', '8', '.', '.', '.', '.', '6', '.'],
		['8', '.', '.', '.', '6', '.', '.', '.', '3'],
		['4', '.', '.', '8', '.', '3', '.', '.', '1'],
		['7', '.', '.', '.', '2', '.', '.', '.', '6'],
		['.', '6', '.', '.', '.', '.', '2', '8', '.'],
		['.', '.', '.', '4', '1', '9', '.', '.', '5'],
		['.', '.', '.', '.', '8', '.', '.', '7', '9'],
	];
	solveSudoku(board);
	expect(board).toStrictEqual([
		['5', '3', '4', '6', '7', '8', '9', '1', '2'],
		['6', '7', '2', '1', '9', '5', '3', '4', '8'],
		['1', '9', '8', '3', '4', '2', '5', '6', '7'],
		['8', '5', '9', '7', '6', '1', '4', '2', '3'],
		['4', '2', '6', '8', '5', '3', '7', '9', '1'],
		['7', '1', '3', '9', '2', '4', '8', '5', '6'],
		['9', '6', '1', '5', '3', '7', '2', '8', '4'],
		['2', '8', '7', '4', '1', '9', '6', '3', '5'],
		['3', '4', '5', '2', '8', '6', '1', '7', '9'],
	]);
});
