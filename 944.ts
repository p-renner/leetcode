function minDeletionSize(strs: string[]): number {
	let res = 0;

	for (let i = 0; i < strs[0].length; i++) {
		const row = strs.map((s) => s[i]).join('');

		if (!isSorted(row)) {
			res++;
		}
	}

	return res;

	function isSorted(str: string): boolean {
		for (let i = 1; i < str.length; i++) {
			if (str[i] < str[i - 1]) {
				return false;
			}
		}

		return true;
	}
}

describe('minDeletionSize', () => {
	test('case 1', () => {
		expect(minDeletionSize(['cba', 'daf', 'ghi'])).toBe(1);
	});
	test('case 2', () => {
		expect(minDeletionSize(['a', 'b'])).toBe(0);
	});
	test('case 3', () => {
		expect(minDeletionSize(['zyx', 'wvu', 'tsr'])).toBe(3);
	});
});
