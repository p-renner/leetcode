function gcdOfStrings(str1: string, str2: string): string {
	let res = '';

	for (const char of str1) {
		res += char;

		if (!str2.startsWith(res)) {
			break;
		}

		if (str2.length % res.length !== 0 || str1.length % res.length !== 0) {
			continue;
		}

		if (str2 !== res.repeat(str2.length / res.length) || str1 !== res.repeat(str1.length / res.length)) {
			continue;
		}

		return res.repeat(gcd(str2.length / res.length, str1.length / res.length));
	}

	return '';
}

function gcd(a: number, b: number) {
	if (!b) {
		return a;
	}

	return gcd(b, a % b);
}

test('gcdOfStrings', () => {
	expect(gcdOfStrings('ABCABC', 'ABC')).toBe('ABC');
	expect(gcdOfStrings('ABABAB', 'ABAB')).toBe('AB');
	expect(gcdOfStrings('LEET', 'CODE')).toBe('');
	expect(gcdOfStrings('ABABABAB', 'ABAB')).toBe('ABAB');
});
