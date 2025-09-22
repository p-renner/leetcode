function maxFrequencyElements(nums: number[]): number {
	const map = new Map<number, number>();

	let max = 0;
	let res = 0;

	for (const num of nums) {
		const freq = (map.get(num) || 0) + 1;
		map.set(num, freq);

		if (freq < max) {
			continue;
		}

		if (freq == max) {
			res++;
			continue;
		}

		res = 1;
		max = freq;
	}

	return res * max;
}
