function minimumRecolors(blocks: string, k: number): number {
	let swaps = 0;

	for (let i = 0; i < k; i++) {
		if (blocks[i] == 'W') {
			swaps++;
		}
	}
	let res = swaps;

	for (let i = k; i < blocks.length; i++) {
		if (blocks[i - k] == 'W') {
			swaps--;
		}

		if (blocks[i] == 'W') {
			swaps++;
		}

		res = Math.min(swaps, res);
	}

	return res;
}

test('minimumRecolors', () => {
	expect(minimumRecolors('WBBWWBBWBW', 7)).toBe(3);
});
