function pushDominoes(dominoes: string): string {
	while (true) {
		let newDominoes = '';

		for (let i = 0; i < dominoes.length; i++) {
			if (dominoes[i] != '.') {
				newDominoes += dominoes[i];
				continue;
			}

			let left = dominoes[i - 1] ?? '';
			let right = dominoes[i + 1] ?? '';

			if (left == 'R' && right == 'L') {
				newDominoes += '.';
			} else if (left == 'R') {
				newDominoes += 'R';
			} else if (right == 'L') {
				newDominoes += 'L';
			} else {
				newDominoes += dominoes[i];
			}
		}

		if (dominoes == newDominoes) {
			break;
		}

		dominoes = newDominoes;
	}

	return dominoes;
}

test('pushDominoes', () => {
	expect(pushDominoes('RR.L')).toBe('RR.L');
	expect(pushDominoes('.L.R...LR..L..')).toBe('LL.RR.LLRRLL..');
});
