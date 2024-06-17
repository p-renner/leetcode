function minPatches(nums: number[], n: number): number {
	let count = 0;
	let acc = nums[0] == 1 ? 1 : 0;
	let p = nums[0] == 1 ? 1 : 0;
	let i = 0;

	while (acc < n) {
		const curr = nums[p];

		if (curr <= acc || curr == acc + 1) {
			acc += curr;
			p++;
			continue;
		}

		acc += acc + 1;
		i++;
		count++;
	}

	return count;
}

test('1', () => {
	expect(minPatches([1, 3], 6)).toBe(1);
});

test('2', () => {
	expect(minPatches([1, 5, 10], 20)).toBe(2);
});

test('3', () => {
	expect(minPatches([1, 2, 2], 5)).toBe(0);
});

test('4', () => {
	expect(minPatches([1, 2, 31, 33], 2147483647)).toBe(28);
});
