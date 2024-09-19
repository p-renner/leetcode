function diffWaysToCompute(expression: string): number[] {
	const results: number[] = [];

	if (Number.isInteger(Number(expression))) {
		return [Number(expression)];
	}

	for (let i = 0; i < expression.length; i++) {
		const char = expression[i];

		if (Number.isInteger(Number(char))) {
			continue;
		}

		const left = diffWaysToCompute(expression.slice(0, i));
		const right = diffWaysToCompute(expression.slice(i + 1));

		for (const lval of left) {
			for (const rval of right) {
				if (char == '+') {
					results.push(lval + rval);
				} else if (char == '-') {
					results.push(lval - rval);
				} else if (char == '*') {
					results.push(lval * rval);
				}
			}
		}
	}

	return results;
}

test('diffWaysToCompute', () => {
	expect(diffWaysToCompute('22')).toEqual([22]);
	expect(diffWaysToCompute('2-1-1')).toEqual([2, 0]);
	expect(diffWaysToCompute('2*3-4*5')).toEqual([-34, -10, -14, -10, 10]);
});
