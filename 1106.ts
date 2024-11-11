function parseBoolExpr(expression: string): boolean {
	const stack: string[] = [];

	for (let i = 0; i < expression.length; i++) {
		if (expression[i] === ',') {
			continue;
		}

		if (expression[i] !== ')') {
			stack.push(expression[i]);
			continue;
		}

		const open = stack.lastIndexOf('(');
		const seen = new Set(stack.slice(open + 1));
		stack.length = open;

		const operator = stack.pop();

		if (operator === '&') {
			stack.push(seen.has('f') ? 'f' : 't');
		} else if (operator === '|') {
			stack.push(seen.has('t') ? 't' : 'f');
		} else if (operator === '!') {
			stack.push(seen.has('t') ? 'f' : 't');
		}
	}

	return stack[0] === 't';
}

test('parseBoolExpr', () => {
	expect(parseBoolExpr('&(|(f))')).toBe(false);
	expect(parseBoolExpr('|(f,f,f,t)')).toBe(true);
	expect(parseBoolExpr('!(&(f,t))')).toBe(true);
});
