function targetIndices(nums: number[], target: number): number[] {
	let count = 0;
	let less = 0;

	for (const num of nums) {
		if (num > target) {
			continue;
		}

		if (num == target) {
			count++;
			continue;
		}

		less++;
	}

	let res = [];
	for (let i = 0; i < count; i++) {
		res.push(less + i);
	}

	return res;
}

describe('targetIndices', () => {
	test('case 1', () => {
		expect(targetIndices([1, 2, 5, 2, 3], 2)).toEqual([1, 2]);
	});
	test('case 2', () => {
		expect(targetIndices([1, 2, 5, 2, 3], 3)).toEqual([3]);
	});
	test('case 3', () => {
		expect(targetIndices([1, 2, 5, 2, 3], 5)).toEqual([4]);
	});
});
