function maxFrequency(nums: number[], k: number, numOperations: number): number {
	nums.sort((a, b) => a - b);

	let ans = 0;
	const numCount: Map<number, number> = new Map();

	let lastNumIndex = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== nums[lastNumIndex]) {
			numCount.set(nums[lastNumIndex], i - lastNumIndex);
			ans = Math.max(ans, i - lastNumIndex);
			lastNumIndex = i;
		}
	}

	numCount.set(nums[lastNumIndex], nums.length - lastNumIndex);
	ans = Math.max(ans, nums.length - lastNumIndex);

	const leftBound = (value: number) => {
		let left = 0;
		let right = nums.length - 1;
		while (left < right) {
			const mid = Math.floor((left + right) / 2);
			if (nums[mid] < value) {
				left = mid + 1;
			} else {
				right = mid;
			}
		}
		return left;
	};

	const rightBound = (value: number) => {
		let left = 0;
		let right = nums.length - 1;
		while (left < right) {
			const mid = Math.floor((left + right + 1) / 2);
			if (nums[mid] > value) {
				right = mid - 1;
			} else {
				left = mid;
			}
		}
		return left;
	};

	for (let i = nums[0]; i <= nums[nums.length - 1]; i++) {
		const [l, r] = [leftBound(i - k), rightBound(i + k)];

		let tempAns;

		if (numCount.has(i)) {
			tempAns = Math.min(r - l + 1, numCount.get(i)! + numOperations);
		} else {
			tempAns = Math.min(r - l + 1, numOperations);
		}

		ans = Math.max(ans, tempAns);
	}

	return ans;
}

test('maxFrequency', () => {
	expect(maxFrequency([1, 4, 5], 1, 2)).toBe(2);
	expect(maxFrequency([5, 11, 20, 20], 5, 1)).toBe(2);
});
