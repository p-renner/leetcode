function countPartitions(nums: number[]): number {
	let sum = nums.reduce((acc, curr) => acc + curr, 0);
	let acc = 0;
	let res = 0;

	for (let i = 0; i < nums.length - 1; i++) {
		acc += nums[i];
		sum -= nums[i];

		if (acc % 2 == sum % 2) {
			res++;
		}
	}

	return res;
}

describe('countPartitions', () => {
	test('case 1', () => {
		expect(countPartitions([10, 10, 3, 7, 6])).toBe(4);
	});

	test('case 2', () => {
		expect(countPartitions([1, 2, 2])).toBe(0);
	});
});
