function setZeroes(matrix: number[][]): void {
	const rows = new Array<boolean>(matrix.length).fill(false);
	const cols = new Array<boolean>(matrix[0].length).fill(false);

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] == 0) {
				rows[i] = true;
				cols[j] = true;
			}
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (rows[i] || cols[j]) {
				matrix[i][j] = 0;
			}
		}
	}
}
