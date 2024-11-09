function makeFancyString(s: string): string {
	let res = '';
	let [last, count] = ['', 0];

	for (const c of s) {
		if (last != c) {
			count = 0;
			last = c;
		}

		if (count >= 2) {
			continue;
		}

		res += c;
		count++;
	}

	return res;
}

test('makeFancyString', () => {
	expect(makeFancyString('leeetcode')).toBe('leetcode');
});
