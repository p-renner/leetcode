function maxSum(nums: number[]): number {
	let sum = 0;
	let seen = new Set<number>();

	for (const num of nums) {
		if (num < 0) {
			continue;
		}

		if (seen.has(num)) {
			continue;
		}

		seen.add(num);
		sum += num;
	}

	if (seen.size == 0) {
		return Math.max(...nums);
	}

	return sum;
}
