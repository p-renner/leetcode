function countGood(nums: number[], k: number): number {
	const n = nums.length;
	const count = new Map<number, number>();
	let l = 0;
	let ans = 0;
	let pairs = 0;

	for (let r = 0; r < n; r++) {
		const num = nums[r];
		count.set(num, (count.get(num) || 0) + 1);
		pairs += count.get(num)! - 1;

		while (pairs >= k) {
			const numL = nums[l];
			pairs -= count.get(numL)! - 1;
			count.set(numL, count.get(numL)! - 1);
			if (count.get(numL) === 0) {
				count.delete(numL);
			}
			l++;
		}
		ans += l;
	}

	return ans;
}

test('countGood', () => {
	expect(countGood([1, 1, 1, 1, 1], 10)).toBe(1);
	expect(countGood([3, 1, 4, 3, 2, 2, 4], 2)).toBe(4);
});
