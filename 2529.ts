function maximumCount(nums: number[]): number {
	return Math.max(
		...nums.reduce(
			([p, n], num) => {
				if (num > 0) {
					return [p + 1, n];
				} else if (num < 0) {
					return [p, n + 1];
				}

				return [p, n];
			},
			[0, 0],
		),
	);
}

test('maximumCount', () => {
	expect(maximumCount([-2, -1, -1, 1, 2, 3])).toBe(3);
	expect(maximumCount([-3, -2, -1, 0, 0, 1, 2])).toBe(3);
	expect(maximumCount([5, 20, 66, 1314])).toBe(4);
});
