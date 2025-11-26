function getSneakyNumbers(nums: number[]): number[] {
	const sneaky: number[] = [];
	const seen = new Set<number>();

	for (const num of nums) {
		if (seen.has(num)) {
			sneaky.push(num);

			if (sneaky.length < 2) {
				continue;
			}

			return sneaky;
		}

		seen.add(num);
	}

	return [];
}
