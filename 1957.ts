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

function makeFancyString2(s: string): string {
	let last = '';
	let count = 0;
	let res = '';

	for (const c of s) {
		if (last != c) {
			last = c;
			count = 1;
			res += c;
			continue;
		}

		count++;

		if (count == 2) {
			res += c;
		}
	}

	return res;
}

test('makeFancyString', () => {
	expect(makeFancyString('leeetcode')).toBe('leetcode');
});
