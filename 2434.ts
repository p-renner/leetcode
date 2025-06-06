function robotWithString(s: string): string {
	let count = new Array(26).fill(0);

	for (let c of s) {
		count[c.charCodeAt(0) - 97]++;
	}

	let stack: string[] = [];
	let res: string[] = [];
	let min = 'a';

	for (let c of s) {
		stack.push(c);
		count[c.charCodeAt(0) - 97]--;

		while (min !== 'z' && count[min.charCodeAt(0) - 97] === 0) {
			min = String.fromCharCode(min.charCodeAt(0) + 1);
		}

		while (stack.length > 0 && stack[stack.length - 1] <= min) {
			res.push(stack.pop()!);
		}
	}

	return res.join('');
}

test('robotWithString', () => {
	expect(robotWithString('zza')).toBe('azz');
	expect(robotWithString('bac')).toBe('abc');
	expect(robotWithString('bdda')).toBe('addb');
});
