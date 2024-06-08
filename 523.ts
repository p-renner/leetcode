function checkSubarraySum(nums: number[], k: number): boolean {
	const modArr = new Set<number>([0]);
	let sum = 0;
	let prev = 0;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		const mod = sum % k;

		if (!modArr.has(mod)) {
			prev = mod;
			modArr.add(mod);
			continue;
		}

		if (prev == mod) {
			prev = -1;
			continue;
		}

		return true;
	}

	return false;
}

test('checkSubarraySum', () => {
	expect(checkSubarraySum([23, 2, 4, 6, 7], 6)).toBe(true);
	expect(checkSubarraySum([23, 2, 6, 4, 7], 6)).toBe(true);
	expect(checkSubarraySum([23, 2, 6, 4, 7], 13)).toBe(false);
	expect(checkSubarraySum([23, 2, 4, 3, 7], 6)).toBe(true);
	expect(checkSubarraySum([], 1)).toBe(false);
	expect(checkSubarraySum([0], 1)).toBe(false);
	expect(checkSubarraySum([1], 1)).toBe(false);
	expect(checkSubarraySum([0, 0], 1)).toBe(true);
	expect(checkSubarraySum([3, 3], 6)).toBe(true);
});
