function minBitwiseArray(nums: number[]): number[] {
	let map = new Map<number, number>();

	for (let i = 0; i < 1000; i++) {
		const res = i | (i + 1);

		if (map.has(res)) {
			continue;
		}

		map.set(res, i);
	}

	return nums.map((num) => map.get(num) || -1);
}

describe('minBitwiseArray', () => {
	test('case 1', () => {
		expect(minBitwiseArray([2, 3, 5, 7])).toStrictEqual([-1, 1, 4, 3]);
	});

	test('case 2', () => {
		expect(minBitwiseArray([11, 13, 31])).toStrictEqual([9, 12, 15]);
	});
});
