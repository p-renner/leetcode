function smallestNumber(pattern: string): string {
	pattern = 'I' + pattern;
	const padding = new Array(pattern.length).fill(0);
	let lastI = 0;

	for (let i = 1; i < pattern.length; i++) {
		if (pattern[i] == 'I') {
			lastI = i;
			continue;
		}

		padding[lastI]++;
	}

	let res = '';
	let smallest = 1;
	let last = 1;

	for (let i = 0; i < pattern.length; i++) {
		if (pattern[i] == 'I') {
			res += smallest + padding[i];
			last = smallest + padding[i];
			smallest += padding[i] + 1;
			continue;
		}

		last--;
		res += last;
	}

	return res;
}

test('smallestNumber', () => {
	expect(smallestNumber('IIIDIDDD')).toBe('123549876');
	expect(smallestNumber('DDD')).toBe('4321');
});
