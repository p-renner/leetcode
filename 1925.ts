function countTriples(n: number): number {
	const squares = Array.from({ length: n }, (_, i) => (i + 1) * (i + 1));
	const set = new Set<number>(squares);
	let res = 0;

	for (let i = 0; i < squares.length; i++) {
		for (let j = i + 1; j < squares.length; j++) {
			if (i == j) {
				continue;
			}

			if (set.has(squares[i] + squares[j])) {
				res += 2;
			}
		}
	}

	return res;
}

describe('countTriples', () => {
	test('case 1', () => {
		expect(countTriples(5)).toBe(2);
	});
	test('case 2', () => {
		expect(countTriples(10)).toBe(4);
	});
});
