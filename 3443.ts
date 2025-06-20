function maxDistance(s: string, k: number): number {
	let x = 0;
	let y = 0;
	let res = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] == 'N') {
			y++;
		} else if (s[i] == 'E') {
			x++;
		} else if (s[i] == 'S') {
			y--;
		} else if (s[i] == 'W') {
			x--;
		}

		res = Math.max(res, Math.min(Math.abs(x) + Math.abs(y) + k * 2, i + 1));
	}

	return res;
}

test('maxDistance', () => {
	expect(maxDistance('NWSE', 1)).toBe(3);
	expect(maxDistance('NSWWEW', 3)).toBe(6);
});
