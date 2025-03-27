function minimumIndex(nums: number[]): number {
	const minDominant = Math.floor(nums.length / 2) + 1;
	const map = new Map<number, number>();

	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	let dominantElement = [0, 0];

	for (const [num, count] of map.entries()) {
		if (dominantElement[1] < count) {
			dominantElement = [num, count];
		}
	}

	if (dominantElement[1] < minDominant) {
		return -1;
	}

	let countDominant = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == dominantElement[0]) {
			countDominant++;
		}

		if (2 * countDominant <= i + 1) {
			continue;
		}

		const restDominant = dominantElement[1] - countDominant;
		const restLen = nums.length - i - 1;

		if (2 * restDominant > restLen) {
			return i;
		}
	}

	return -1;
}

test('minimumIndex', () => {
	expect(minimumIndex([1, 2, 2, 2])).toBe(2);
	expect(minimumIndex([2, 1, 3, 1, 1, 1, 7, 1, 2, 1])).toBe(4);
	expect(minimumIndex([3, 3, 3, 3, 7, 2, 2])).toBe(-1);
});
