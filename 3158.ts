function duplicateNumbersXOR(nums: number[]): number {
	let result = 0;
	const seen = new Set<number>();

	for (const num of nums) {
		if (seen.has(num)) {
			result ^= num;
		}

		seen.add(num);
	}

	return result;
}

function duplicateNumbersXOR2(nums: number[]): number {
	return nums
		.filter((num, i) => nums.indexOf(num) === i && nums.indexOf(num) !== nums.lastIndexOf(num))
		.reduce((prev, curr) => prev ^ curr, 0);
}

test('duplicateNumbersXOR', () => {
	expect(duplicateNumbersXOR([1, 2, 1, 3])).toBe(1);
	expect(duplicateNumbersXOR([1, 2, 3])).toBe(0);
	expect(duplicateNumbersXOR([1, 2, 2, 1])).toBe(3);
	expect(duplicateNumbersXOR2([1, 2, 1, 3])).toBe(1);
	expect(duplicateNumbersXOR2([1, 2, 3])).toBe(0);
	expect(duplicateNumbersXOR2([1, 2, 2, 1])).toBe(3);
});
