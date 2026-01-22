function minimumPairRemoval(nums: number[]): number {
	let ops = 0;
	let arr = [...nums];

	while (!isNonDec(arr)) {
		ops++;

		const sums: number[] = sum(arr);
		const min = Math.min(...sums);
		let done = false;
		const newArr: number[] = [];

		for (let i = 0; i < arr.length; i++) {
			if (sums[i] == min && !done) {
				newArr.push(sums[i]);
				done = true;
				i++;
				continue;
			}

			newArr.push(arr[i]);
		}

		arr = newArr;
	}

	return ops;

	function isNonDec(nums: number[]): boolean {
		let prev = nums[0];

		for (let i = 1; i < nums.length; i++) {
			if (nums[i] < prev) {
				return false;
			}

			prev = nums[i];
		}

		return true;
	}

	function sum(nums: number[]): number[] {
		let prev = nums[0];
		let newNums = [];

		for (let i = 1; i < nums.length; i++) {
			newNums.push(prev + nums[i]);
			prev = nums[i];
		}

		return newNums;
	}
}

describe('minimumPairRemoval', () => {
	test('case 1', () => {
		expect(minimumPairRemoval([2, 2, -1, 3, -2, 2, 1, 1, 1, 0, -1])).toBe(9);
	});
});
