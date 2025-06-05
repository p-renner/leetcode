function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
	const map = new Map<string, string>();
	let n = s1.length;

	for (let i = 0; i < n; i++) {
		const [c1, c2] = [find(s1[i]), find(s2[i])];

		const smaller = c1 < c2 ? c1 : c2;

		map.set(c1, smaller);
		map.set(c2, smaller);
	}

	let res = '';

	for (let i = 0; i < baseStr.length; i++) {
		res += find(baseStr[i]);
	}

	function find(c: string): string {
		if (!map.has(c)) {
			return c;
		}

		let curr = c;

		while (map.get(curr) != curr) {
			curr = map.get(curr);
		}

		return curr;
	}

	return res;
}

test('smallestEquivalentString', () => {
	expect(smallestEquivalentString('parker', 'morris', 'parser')).toBe('makkek');
	expect(smallestEquivalentString('hello', 'world', 'hold')).toBe('hdld');
	expect(smallestEquivalentString('leetcode', 'programs', 'sourcecode')).toBe('aauaaaaada');
});
