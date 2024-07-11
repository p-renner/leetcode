// O(n^2) Runtime because of the string reversing. Could probably be improved,
// by only reversing every 2nd depth parenteses. But this works too :)
function reverseParentheses(s: string): string {
	const stack: string[] = [''];

	for (const char of s) {
		if (char == '(') {
			stack.unshift('');
			continue;
		}

		if (char == ')') {
			const rev = [...stack.shift()].reverse().join('');
			stack[0] += rev;
			continue;
		}

		stack[0] += char;
	}

	return stack[0];
}

test('reverseParentheses', () => {
	expect(reverseParentheses('(ed(et(oc))el)')).toBe('leetcode');
	expect(reverseParentheses('(abcd)')).toBe('dcba');
	expect(reverseParentheses('(u(love)i)')).toBe('iloveu');
});
