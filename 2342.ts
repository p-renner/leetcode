function maximumSum(nums: number[]): number {
	function crossSum(num: number): number {
		return num
			.toString()
			.split('')
			.reduce((acc, digit) => acc + parseInt(digit), 0);
	}

	const map = new Map<number, number>();
	let res = -1;

	for (const num of nums) {
		const sum = crossSum(num);

		if (!map.has(sum)) {
			map.set(sum, num);
			continue;
		}

		const curr = map.get(sum);
		res = Math.max(res, curr + num);

		if (curr < num) {
			map.set(sum, num);
		}
	}

	return res;
}
