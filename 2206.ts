function divideArray(nums: number[]): boolean {
	const map = new Map<number, number>();

	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	return [...map.values()].every((val) => val % 2 === 0);
}
