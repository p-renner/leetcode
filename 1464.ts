function maxProduct(nums: number[]): number {
	let first: number = 0,
		second: number = 0;

	for (const num of nums) {
		if (num < second) {
			continue;
		}

		second = num;

		if (num < first) {
			continue;
		}

		second = first;
		first = num;
	}

	return (first - 1) * (second - 1);
}

describe('maxProduct', () => {
	test('case 1', () => {
		expect(maxProduct([3, 4, 5, 2])).toBe(12);
	});
	test('case 2', () => {
		expect(maxProduct([1, 5, 4, 5])).toBe(16);
	});
	test('case 3', () => {
		expect(maxProduct([3, 7])).toBe(12);
	});
});
