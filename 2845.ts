function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
	const count = new Map<number, number>();
	let res = 0;
	let prefix = 0;
	count.set(0, 1);

	for (let i = 0; i < nums.length; i++) {
		prefix += nums[i] % modulo === k ? 1 : 0;
		res += count.get((prefix - k + modulo) % modulo) || 0;
		count.set(prefix % modulo, (count.get(prefix % modulo) || 0) + 1);
	}

	return res;
}

test('countInterestingSubarrays', () => {
	expect(countInterestingSubarrays([3, 2, 4], 2, 1)).toBe(3);
});
