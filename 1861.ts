function rotateTheBox(box: string[][]): string[][] {
	const rotatedBox = box[0].map((_, index) => box.map((row) => row[index]).reverse());

	for (let i = 0; i < rotatedBox[0].length; i++) {
		for (let j = rotatedBox.length - 1; j >= 0; j--) {
			if (rotatedBox[j][i] != '#') {
				continue;
			}

			rotatedBox[j][i] = '.';

			let newJ = j;
			while (rotatedBox[newJ + 1] && rotatedBox[newJ + 1][i] == '.') {
				newJ++;
			}

			rotatedBox[newJ][i] = '#';
		}
	}

	return rotatedBox;
}

test('rotateTheBox', () => {
	expect(rotateTheBox([['#', '.', '#']])).toStrictEqual([['.'], ['#'], ['#']]);
	expect(
		rotateTheBox([
			['#', '.', '*', '.'],
			['#', '#', '*', '.'],
		]),
	).toStrictEqual([
		['#', '.'],
		['#', '#'],
		['*', '*'],
		['.', '.'],
	]);
});
