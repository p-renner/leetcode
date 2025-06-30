function findLHS(nums: number[]): number {
	const map = new Map<number, number>();

	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	let res = 0;
	for (const key of map.keys()) {
		if (!map.has(key + 1)) {
			continue;
		}

		res = Math.max(map.get(key)! + map.get(key + 1)!, res);
	}

	return res;
}
