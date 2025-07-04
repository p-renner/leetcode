function kthCharacter(k: number, operations: number[]): string {
	let res = 0;

	while (k !== 1) {
		let t = Math.floor(Math.log2(k));

		if (Math.pow(2, t) === k) {
			t--;
		}

		k -= Math.pow(2, t);

		if (operations[t] === 1) {
			res++;
		}
	}

	return String.fromCharCode(97 + (res % 26));
}

test('kthCharacter', () => {
	expect(kthCharacter(5, [0, 0, 0])).toBe('a');
	expect(kthCharacter(10, [0, 1, 0, 1])).toBe('b');
	expect(kthCharacter(28172699, [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1])).toBe(
		'f',
	);
});
