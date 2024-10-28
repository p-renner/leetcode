function longestSquareStreak(nums: number[]): number {
	const set = new Set(nums);
	nums = [...set].sort((a, b) => a - b);
	let max = -1;

	for (const num of nums) {
		let streak = 1;
		let square = num * num;

		while (set.has(square)) {
			square *= square;
			streak++;
		}

		if (streak > 1) {
			max = Math.max(streak, max);
		}
	}

	return max;
}

test('longestSquareStreak', () => {
	expect(longestSquareStreak([4, 3, 6, 16, 8, 2])).toBe(3);
	expect(longestSquareStreak([2, 3, 5, 6, 7])).toBe(-1);
});
