function findSmallestInteger(nums: number[], value: number): number {
	const mods = new Array(value).fill(0);

	nums.forEach((num) => {
		mods[((num % value) + value) % value]++;
	});

	let min = 0;

	for (let i = 0; i < mods.length; i++) {
		if (mods[i] < mods[min]) {
			min = i;
		}
	}

	return min + mods[min] * value;
}

test('findSmallestInteger', () => {
	expect(findSmallestInteger([1, -10, 7, 13, 6, 8], 5)).toBe(4);
	expect(findSmallestInteger([1, -10, 7, 13, 6, 8], 7)).toBe(2);
});
