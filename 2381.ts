function shiftingLetters(s: string, shifts: number[][]): string {
	const prefix = new Array(s.length + 1).fill(0);

	for (const [start, end, dir] of shifts) {
		prefix[start] += dir * 2 - 1;
		prefix[end + 1] -= dir * 2 - 1;
	}

	let res = '';
	let diff = 0;

	for (let i = 0; i < s.length; i++) {
		diff += prefix[i];
		res += String.fromCharCode(((s.charCodeAt(i) - 97 + (diff % 26) + 26) % 26) + 97);
	}

	return res;
}

test('shiftingLetters', () => {
	expect(
		shiftingLetters('abc', [
			[0, 1, 0],
			[1, 2, 1],
			[0, 2, 1],
		]),
	).toBe('ace');
	expect(
		shiftingLetters('dztz', [
			[0, 0, 0],
			[1, 1, 1],
		]),
	).toBe('catz');
	expect(
		shiftingLetters('aztz', [
			[0, 0, 0],
			[1, 1, 1],
		]),
	).toBe('zatz');
});
