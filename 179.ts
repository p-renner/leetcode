function largestNumber(nums: number[]): string {
	return nums
		.map((num) => num.toString())
		.sort((a, b) => (a + b > b + a ? -1 : 1))
		.join('')
		.replace(/^0+/, '0');
}

test('largestNumber', () => {
	expect(largestNumber([10, 2])).toBe('210');
	expect(largestNumber([3, 30, 34, 5, 9])).toBe('9534330');
});
