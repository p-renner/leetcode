function minDeletionSize(strs: string[]): number {
	const n = strs[0].length;
	const done = new Array(strs.length).fill(false);
	let res = 0;

	for (let i = 0; i < n; i++) {
		let toSetDone: number[] = new Array();

		for (let j = 1; j < strs.length; j++) {
			if (done[j]) {
				continue;
			}

			const curr = strs[j][i];
			const prev = strs[j - 1][i];

			if (curr < prev) {
				res++;
				toSetDone = [];
				break;
			} else if (curr > prev) {
				toSetDone.push(j);
			}
		}

		for (const i of toSetDone) {
			done[i] = true;
		}
	}

	return res;
}

describe('minDeletionSize', () => {
	test('case 1', () => {
		expect(minDeletionSize(['ca', 'bb', 'ac'])).toBe(1);
	});

	test('case 2', () => {
		expect(minDeletionSize(['xc', 'yb', 'za'])).toBe(0);
	});

	test('case 3', () => {
		expect(minDeletionSize(['zyx', 'wvu', 'tsr'])).toBe(3);
	});

	test('case 4', () => {
		expect(minDeletionSize(['vdy', 'vei', 'zvc', 'zld'])).toBe(2);
	});
});
