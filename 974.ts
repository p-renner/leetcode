function subarraysDivByK(nums: number[], k: number): number {
	let count = 0;
	let sum = 0;
	let prefix = new Map<number, number>();
	prefix.set(0, 1);

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		let mod = sum % k;
		if (mod < 0) mod += k;

		const p = prefix.get(mod);
		if (p) count += p;
		prefix.set(mod, (p || 0) + 1);
	}

	return count;
}

test('subarrays div by k', () => {
	expect(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)).toBe(7);
	expect(subarraysDivByK([5], 9)).toBe(0);
	expect(subarraysDivByK([7, -5, 5, -8, -6, 6, -4, 7, -8, -7], 7)).toBe(11);
});
