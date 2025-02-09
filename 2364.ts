function countBadPairs(nums: number[]): number {
	const pairs = calcCombinations(nums.length);
	const freqMap = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i] - i;
		freqMap.set(curr, (freqMap.get(curr) || 0) + 1);
	}

	let goodPairs = 0;

	for (const num of freqMap.values()) {
		if (num < 2) {
			continue;
		}

		goodPairs += calcCombinations(num);
	}

	return pairs - goodPairs;
}

function calcCombinations(num: number): number {
	return (num * (num - 1)) / 2;
}

test('countBadPairs', () => {
	expect(countBadPairs([4, 1, 3, 3])).toBe(5);
	expect(countBadPairs([1, 2, 3, 4, 5])).toBe(0);
});
