function rangeSum(nums: number[], n: number, left: number, right: number): number {
	const sums: number[] = [];
	for (let i = 0; i < n; i++) {
		let sum = 0;
		for (let j = i; j < n; j++) {
			sum += nums[j];
			sums.push(sum);
		}
	}

	return (
		sums
			.sort((a, b) => a - b)
			.slice(left - 1, right)
			.reduce((acc, cur) => acc + cur, 0) % 1000000007
	);
}

test('rangeSum', () => {
	expect(rangeSum([1, 2, 3, 4], 4, 1, 5)).toBe(13);
	expect(rangeSum([1, 2, 3, 4], 4, 3, 4)).toBe(6);
	expect(rangeSum([1, 2, 3, 4], 4, 1, 10)).toBe(50);
	expect(rangeSum(new Array(1000).fill(100), 1000, 1, 500500)).toBe(716699888);
});
