function reinitializePermutation(n: number): number {
	let perm = Array.from({ length: n }, (_, i) => i);
	const original = perm.join('');
	let i = 0;

	do {
		const arr = [];
		perm.forEach((i, _) => {
			if (i % 2 === 0) {
				arr[i] = perm[i / 2];
			} else {
				arr[i] = perm[n / 2 + (i - 1) / 2];
			}
		});
		perm = arr;
		i++;
	} while (perm.join('') !== original);

	return i;
}

test('reinitializePermutation', () => {
	expect(reinitializePermutation(2)).toBe(1);
	expect(reinitializePermutation(4)).toBe(2);
	expect(reinitializePermutation(6)).toBe(4);
});
