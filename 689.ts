function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
	const n = nums.length;
	let maxSum = 0;

	const prefixSum: number[] = [0];

	for (let i = 0; i < nums.length; i++) {
		prefixSum.push(prefixSum[i] + nums[i]);
	}
	const leftMaxIdx = new Array(n).fill(0);
	const rightMaxIdx = new Array(n).fill(0);
	let result = new Array(3).fill(0);

	let currMaxSum = prefixSum[k] - prefixSum[0];

	for (let i = k; i < n; i++) {
		const currSum = prefixSum[i + 1] - prefixSum[i + 1 - k];

		if (currSum > currMaxSum) {
			leftMaxIdx[i] = i + 1 - k;
			currMaxSum = currSum;
		} else {
			leftMaxIdx[i] = leftMaxIdx[i - 1];
		}
	}

	rightMaxIdx[n - k] = n - k;
	currMaxSum = prefixSum[n] - prefixSum[n - k];

	for (let i = n - k - 1; i >= 0; i--) {
		const currSum = prefixSum[i + k] - prefixSum[i];
		if (currSum >= currMaxSum) {
			rightMaxIdx[i] = i;
			currMaxSum = currSum;
		} else {
			rightMaxIdx[i] = rightMaxIdx[i + 1];
		}
	}

	for (let i = k; i < n - 2 * k + 1; i++) {
		const leftIdx = leftMaxIdx[i - 1];
		const rightIdx = rightMaxIdx[i + k];
		const total =
			prefixSum[i + k] -
			prefixSum[i] +
			prefixSum[leftIdx + k] -
			prefixSum[leftIdx] +
			prefixSum[rightIdx + k] -
			prefixSum[rightIdx];

		if (total > maxSum) {
			maxSum = total;
			result = [leftIdx, i, rightIdx];
		}
	}

	return result;
}

test('maxSumOfThreeSubarrays', () => {
	expect(maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2)).toStrictEqual([0, 3, 5]);
	expect(maxSumOfThreeSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1], 2)).toStrictEqual([0, 2, 4]);
});
