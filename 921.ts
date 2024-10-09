function minAddToMakeValid(s: string): number {
	let open = 0;
	let add = 0;

	for (const c of s) {
		if (c == '(') {
			open++;
			continue;
		}

		if (open == 0) {
			add++;
			continue;
		}

		open--;
	}

	return open + add;
}

test('minAddToMakeValid', () => {
	expect(minAddToMakeValid('())')).toEqual(1);
	expect(minAddToMakeValid('(((')).toEqual(3);
	expect(minAddToMakeValid('()')).toEqual(0);
	expect(minAddToMakeValid('()))((')).toEqual(4);
});
