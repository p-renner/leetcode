function maximumGain(s: string, x: number, y: number): number {
	const stack: string[] = [];
	const [a, b] = x > y ? ['a', 'b'] : ['b', 'a'];
	let result = 0;

	for (const c of s) {
		if (c === a) {
			stack.push(c);
		} else if (c === b && stack.length > 0 && stack[stack.length - 1] === a) {
			stack.pop();
			result += Math.max(x, y);
		} else {
			stack.push(c);
		}
	}

	const remaining = stack.join('');
	stack.length = 0;

	for (const c of remaining) {
		if (c === b) {
			stack.push(c);
		} else if (c === a && stack.length > 0 && stack[stack.length - 1] === b) {
			stack.pop();
			result += Math.min(x, y);
		} else {
			stack.push(c);
		}
	}

	return result;
}

test('maximum gain', () => {
	expect(maximumGain('cdbcbbaaabab', 4, 5)).toBe(19);
	expect(maximumGain('aabbaaxybbaabb', 5, 4)).toBe(20);
});
