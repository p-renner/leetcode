function longestNiceSubarray(nums: number[]): number {
	const setBits = nums.map((num) =>
		num
			.toString(2)
			.split('')
			.reverse()
			.map((c, i) => (c == '1' ? i : -1))
			.filter((c) => c !== -1),
	);

	let res = 1;

	for (let i = 0; i < nums.length - 1; i++) {
		let set = new Set(setBits[i]);

		for (let j = i + 1; j < Math.min(nums.length, i + 30); j++) {
			if (setBits[j].some((item) => set.has(item))) {
				break;
			}

			res = Math.max(res, j - i + 1);
			setBits[j].forEach((n) => set.add(n));
		}
	}

	return res;
}

test('longestNiceSubarray', () => {
	expect(longestNiceSubarray([1, 3, 8, 48, 10])).toBe(3);
	expect(longestNiceSubarray([3, 1, 5, 11, 13])).toBe(1);
	expect(longestNiceSubarray([16, 2048, 2097152])).toBe(3);
});
