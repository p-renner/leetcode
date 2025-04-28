function countSubarrays(nums: number[], k: number): number {
	let res = 0;
	let sum = 0;
	let l = 0;

	for (let r = 0; r < nums.length; r++) {
		sum += nums[r];
		let len = r - l + 1;

		while (sum * len >= k) {
			sum -= nums[l];
			l++;
			len = r - l + 1;
		}

		res += len;
	}

	return res;
}

test('countSubarrays', () => {
	expect(countSubarrays([2, 1, 4, 3, 5], 10)).toBe(6);
	expect(countSubarrays([1, 1, 1], 5)).toBe(5);
});
