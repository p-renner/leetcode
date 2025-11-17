function kLengthApart(nums: number[], k: number): boolean {
	let i = 0;

	while (i < nums.length) {
		if (nums[i] == 1) {
			for (let j = i + 1; j <= Math.min(nums.length - 1, i + k); j++) {
				if (nums[j] == 1) {
					return false;
				}
			}
		}

		i++;
	}

	return true;
}
