function maxSumDivThree(nums: number[]): number {
	nums.sort((a, b) => a - b);
	let sum = 0;
	let rest1: number[] = [];
	let rest2: number[] = [];

	for (const num of nums) {
		if (num % 3 == 1) {
			rest1.push(num);
		} else if (num % 3 == 2) {
			rest2.push(num);
		}

		sum += num;
	}

	if (sum % 3 == 1) {
		let min = Infinity;
		if (rest1.length > 0) {
			min = rest1[0];
		}

		if (rest2.length > 1) {
			min = Math.min(rest2[0] + rest2[1], min);
		}

		return sum - min;
	} else if (sum % 3 == 2) {
		let min = Infinity;
		if (rest2.length > 0) {
			min = rest2[0];
		}

		if (rest1.length > 1) {
			min = Math.min(rest1[0] + rest1[1], min);
		}

		return sum - min;
	}

	return sum;
}

test('maxSumDivThree', () => {
	expect(maxSumDivThree([3, 6, 5, 1, 8])).toBe(18);
	expect(maxSumDivThree([3, 6, 8, 1, 5])).toBe(18);
	expect(maxSumDivThree([4])).toBe(0);
	expect(maxSumDivThree([1, 2, 3, 4, 4])).toBe(12);
	expect(maxSumDivThree([1, 1, 1, 5, 9, 9])).toBe(24);
});
