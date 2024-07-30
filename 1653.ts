function minimumDeletions(s: string): number {
	if (s.length == 0) {
		return 0;
	}

	let bBefore = 0;
	let aAfter = 0;

	for (const c of s) {
		if (c == 'a') {
			aAfter++;
		}
	}

	let res = Infinity;

	for (const c of s) {
		if (c == 'a') {
			aAfter--;
		}

		res = Math.min(res, aAfter + bBefore);

		if (c == 'b') {
			bBefore++;
		}
	}

	return res;
}

test('minimumDeletions', () => {
	expect(minimumDeletions('aababbab')).toBe(2);
	expect(minimumDeletions('bbaaaaabb')).toBe(2);
});
