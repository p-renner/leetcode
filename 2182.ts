function repeatLimitedString(s: string, repeatLimit: number): string {
	const freqMap = new Map<string, number>();

	for (const c of s) {
		freqMap.set(c, (freqMap.get(c) || 0) + 1);
	}

	const stack = new Array(...freqMap.entries()).sort((a, b) => b[0].charCodeAt(0) - a[0].charCodeAt(0));
	let res = '';

	while (stack.length > 0) {
		if (stack[0][1] <= repeatLimit) {
			const [c, count] = stack.shift();
			res += c.repeat(count);
			continue;
		}

		res += stack[0][0].repeat(repeatLimit);
		stack[0][1] -= repeatLimit;

		if (!stack[1]) {
			break;
		}

		stack[1][1] -= 1;
		res += stack[1][0];

		if (stack[1][1] == 0) {
			stack.splice(1, 1);
		}
	}

	return res;
}

test('repeatLimitedString', () => {
	expect(repeatLimitedString('cczazcc', 3)).toBe('zzcccac');
	expect(repeatLimitedString('aababab', 2)).toBe('bbabaa');
	expect(repeatLimitedString('xyutfpopdynbadwtvmxiemmusevduloxwvpkjioizvanetecnuqbqqdtrwrkgt', 1)).toBe(
		'zyxyxwxwvwvuvuvututstrtrtqpqpqponononmlmkmkjigifiededededcbaba',
	);
});
