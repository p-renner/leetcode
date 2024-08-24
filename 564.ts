function nearestPalindromic(n: string): string {
	const possibilities = new Set<string>();

	const even = n.length % 2 === 0;
	const half = Number(n.slice(0, Math.ceil(n.length / 2)));

	possibilities.add(makePalindrome(half, even));
	possibilities.add(makePalindrome(half + 1, even));
	possibilities.add(makePalindrome(half - 1, even));
	possibilities.add((10 ** n.length - 1).toString());
	possibilities.add((10 ** (n.length - 1) - 1).toString());
	possibilities.add((10 ** n.length + 1).toString());
	possibilities.add((10 ** (n.length - 1) + 1).toString());

	return Array.from(possibilities)
		.filter((num) => num !== n)
		.reduce((acc, cur) => {
			const [accDiff, curDiff] = [Math.abs(+acc - +n), Math.abs(+cur - +n)];
			return accDiff === curDiff ? Math.min(+acc, +cur).toString() : curDiff < accDiff ? cur : acc;
		});
}

function makePalindrome(left: number, even: boolean): string {
	let res: string = left.toString();

	if (!even) {
		left = Math.floor(left / 10);
	}

	while (left > 0) {
		res += left % 10;
		left = Math.floor(left / 10);
	}

	return res;
}

test('nearestPalindromic', () => {
	expect(nearestPalindromic('123')).toBe('121');
	expect(nearestPalindromic('1234')).toBe('1221');
	expect(nearestPalindromic('1')).toBe('0');
	expect(nearestPalindromic('10')).toBe('9');
	expect(nearestPalindromic('11')).toBe('9');
	expect(nearestPalindromic('1234')).toBe('1221');
	expect(nearestPalindromic('999')).toBe('1001');
	expect(nearestPalindromic('1000')).toBe('999');
	expect(nearestPalindromic('12932')).toBe('12921');
	expect(nearestPalindromic('99800')).toBe('99799');
	expect(nearestPalindromic('12120')).toBe('12121');
});
