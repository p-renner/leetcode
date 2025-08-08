function smallestSubarrays(nums: number[]): number[] {
	const pos = new Array<number>(30).fill(0);
	const res: number[] = [];

	for (let i = nums.length - 1; i >= 0; i--) {
		let bits = nums[i].toString(2).split('').reverse();

		bits.forEach((bit, j) => {
			if (bit == '1') {
				pos[j] = i;
			}
		});

		res.unshift(Math.max(Math.max(...pos) - i + 1, 1));
	}

	return res;
}

test('smallestSubarrays', () => {
	expect(smallestSubarrays([1, 0, 2, 1, 3])).toStrictEqual([3, 3, 2, 2, 1]);
	expect(smallestSubarrays([1, 2])).toStrictEqual([2, 1]);
	expect(smallestSubarrays([1, 0])).toStrictEqual([1, 1]);
});
