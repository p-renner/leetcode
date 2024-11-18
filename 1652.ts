function decrypt(code: number[], k: number): number[] {
	if (k < 0) {
		code.reverse();
	}

	const res = code.map((_, i) => {
		let sum = 0;

		for (let j = 0; j < Math.abs(k); j++) {
			sum += code[(i + j + 1) % code.length];
		}

		return sum;
	});

	if (k < 0) {
		res.reverse();
	}

	return res;
}

test('decrypt', () => {
	expect(decrypt([5, 7, 1, 4], 3)).toStrictEqual([12, 10, 16, 13]);
	expect(decrypt([1, 2, 3, 4], 0)).toStrictEqual([0, 0, 0, 0]);
	expect(decrypt([2, 4, 9, 3], -2)).toStrictEqual([12, 5, 6, 13]);
});
