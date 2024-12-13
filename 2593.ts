function findScore(nums: number[]): number {
	const sorted = [...nums.map((num, i) => [num, i])].sort((a, b) => a[0] - b[0]);
	const marked = new Array(nums.length).fill(false);
	let score = 0;

	for (const [num, i] of sorted) {
		if (marked[i]) {
			continue;
		}

		score += num;

		for (let j = 0; j < 3; j++) {
			marked[i - 1 + j] = true;
		}
	}

	return score;
}

test('findScore', () => {
	expect(findScore([2, 1, 3, 4, 5, 2])).toBe(7);
	expect(findScore([2, 3, 5, 1, 3, 2])).toBe(5);
});
