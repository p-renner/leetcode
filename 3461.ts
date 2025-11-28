function hasSameDigits(s: string): boolean {
	let nums = s.split('').map((c) => Number.parseInt(c));

	while (nums.length > 2) {
		let tmp: number[] = [];
		let prev = nums[0];

		for (let i = 1; i < nums.length; i++) {
			const curr = nums[i];
			tmp.push((prev + curr) % 10);
			prev = curr;
		}

		nums = tmp;
	}

	return nums[0] == nums[1];
}

describe('hasSameDigits', () => {
	test('case 1', () => {
		expect(hasSameDigits('3902')).toBe(true);
	});

	test('case 2', () => {
		expect(hasSameDigits('34789')).toBe(false);
	});

	test('case 3', () => {
		expect(hasSameDigits('0000')).toBe(true);
	});

	test('case 4', () => {
		expect(hasSameDigits('1212')).toBe(true);
	});
});
