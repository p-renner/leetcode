function shortestSubarray(nums: number[], k: number): number {
	const sum = new Array(nums.length + 1).fill(0);

	for (let i = 0; i < nums.length; i++) {
		sum[i + 1] = sum[i] + nums[i];
	}

	const queue = new Array(nums.length + 1).fill(0);
	let left = 0;
	let right = 0;
	let len = nums.length + 1;

	for (let i = 0; i < sum.length; i++) {
		while (right > left && sum[i] >= sum[queue[left]] + k) {
			len = Math.min(len, i - queue[left]);
			left++;
		}

		while (right > left && sum[i] <= sum[queue[right - 1]]) {
			right--;
		}

		queue[right] = i;
		right++;
	}

	return len <= nums.length ? len : -1;
}

test('shortestSubarray', () => {
	expect(shortestSubarray([1], 1)).toBe(1);
	expect(shortestSubarray([1, 2], 4)).toBe(-1);
	expect(shortestSubarray([2, -1, 2], 3)).toBe(3);
	expect(shortestSubarray([-28, 81, -20, 28, -29], 89)).toBe(3);
});
