function fractionAddition(expression: string): string {
	const fractions = expression.match(/-?\d+\/\d+/g);

	const sum = fractions.reduce(
		([accNum, accDenom], cur) => {
			const [num, denom] = cur.split('/').map(Number);
			const nums: [number, number] = [accNum * denom + num * accDenom, accDenom * denom];
			const div = gcd(...nums);

			return [nums[0] / div, nums[1] / div];
		},
		[0, 1],
	);

	if (sum[1] < 0) {
		return sum.map((n) => -n).join('/');
	}

	return sum.join('/');
}

function gcd(a: number, b: number): number {
	if (b === 0) {
		return a;
	}
	return gcd(b, a % b);
}

test('fractionAddition', () => {
	expect(fractionAddition('-1/2+1/2')).toBe('0/1');
	expect(fractionAddition('-1/2+1/2+1/3')).toBe('1/3');
	expect(fractionAddition('1/3-1/2')).toBe('-1/6');
});
