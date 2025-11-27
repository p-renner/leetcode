function maxSubarraySum(nums: number[], k: number): number {
	let maxSum = -Infinity;
	let minPrefixSum: number[] = Array(k).fill(Infinity);
	minPrefixSum[k - 1] = 0;
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		maxSum = Math.max(maxSum, sum - minPrefixSum[i % k]);
		minPrefixSum[i % k] = Math.min(minPrefixSum[i % k], sum);
	}

	return maxSum;
}

describe('maxSubarraySum', () => {
	test('case 1', () => {
		expect(maxSubarraySum([1, 2], 1)).toBe(3);
	});

	test('case 2', () => {
		expect(maxSubarraySum([-1, -2, -3, -4, -5], 4)).toBe(-10);
	});

	test('case 3', () => {
		expect(maxSubarraySum([-5, 1, 2, -3, 4], 2)).toBe(4);
	});
});
