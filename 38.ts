function countAndSay(n: number): string {
	return recurse(n);

	function recurse(n: number): string {
		if (n === 1) {
			return '1';
		}

		const prev = recurse(n - 1).toString();
		let count = 1;
		let result = '';

		for (let i = 1; i < prev.length; i++) {
			if (prev[i] === prev[i - 1]) {
				count++;
			} else {
				result += count.toString() + prev[i - 1];
				count = 1;
			}
		}

		result += count.toString() + prev[prev.length - 1];
		return result;
	}
}

test('countAndSay', () => {
	expect(countAndSay(1)).toBe('1');
	expect(countAndSay(2)).toBe('11');
	expect(countAndSay(3)).toBe('21');
	expect(countAndSay(4)).toBe('1211');
	expect(countAndSay(10)).toBe('13211311123113112211');
});
