function replaceNonCoprimes(nums: number[]): number[] {
	const stack: number[] = [];

	for (let num of nums) {
		while (stack.length > 0) {
			let last = stack[stack.length - 1];
			const div = gcd(num, last);

			if (div > 1) {
				num = lcm(num, last, div);
				stack.pop();
			} else {
				break;
			}
		}

		stack.push(num);
	}

	return stack;
}

function lcm(a: number, b: number, gcd: number): number {
	return (a / gcd) * b;
}

function gcd(a: number, b: number): number {
	if (!b) {
		return a;
	}

	return gcd(b, a % b);
}

test('replaceNonCoprimes', () => {
	expect(replaceNonCoprimes([6, 4, 3, 2, 7, 6, 2])).toStrictEqual([12, 7, 6]);
});
