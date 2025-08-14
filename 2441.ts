function findMaxK(nums: number[]): number {
	const set = new Set<number>();
	let res = -1;

	for (const num of nums) {
		if (!set.has(num * -1)) {
			set.add(num);
			continue;
		}

		res = Math.max(Math.abs(num), res);
	}

	return res;
}
