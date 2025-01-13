function numIdenticalPairs(nums: number[]): number {
	const map = new Map<number, number>();
	const memo = new Map<number, number>();

	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	let count = 0;

	for (const val of map.values()) {
		if (val == 1) {
			continue;
		}

		if (memo.has(val)) {
			count += memo.get(val);
			continue;
		}

		const sum = ((val - 1) * val) / 2;
		memo.set(val, sum);
		count += sum;
	}

	return count;
}

test('numIdenticalPairs', () => {
	expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4);
	expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6);
	expect(numIdenticalPairs([1, 2, 3])).toBe(0);
});
