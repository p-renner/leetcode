function numberOfSubarrays(nums: number[], k: number): number {
	let sum = 0;
	const prefixMap: number[][] = [];

	let curr = 1;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 2 == 0) {
			curr++;
			continue;
		}
		prefixMap.push([i, curr]);
		curr = 1;
	}

	for (let i = k - 1; i < prefixMap.length; i++) {
		const prefix = prefixMap[i - k + 1][1];
		const postfix = prefixMap[i + 1] ? prefixMap[i + 1][0] - prefixMap[i][0] : curr;

		sum += prefix * postfix;
	}

	return sum;
}

test('numberOfSubarrays', () => {
	expect(numberOfSubarrays([1, 1, 2, 1, 1], 3)).toBe(2);
	expect(numberOfSubarrays([2, 4, 6], 1)).toBe(0);
	expect(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)).toBe(16);
});
