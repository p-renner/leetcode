function countCompleteSubarrays(nums: number[]): number {
	const uniqueCount = new Set(nums).size;
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		const set = new Set<number>();

		for (let j = i; j < nums.length; j++) {
			set.add(nums[j]);

			if (set.size === uniqueCount) {
				count++;
			}
		}
	}

	return count;
}
