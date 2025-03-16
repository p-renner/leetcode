function repairCars(ranks: number[], cars: number): number {
	let min = 0;
	let max = Math.max(...ranks) * cars * cars;

	while (min < max) {
		const mid = Math.floor((min + max) / 2);

		if (check(mid)) {
			max = mid;
		} else {
			min = mid + 1;
		}
	}

	return min;

	function check(time: number): boolean {
		const possibleCars = ranks.reduce((acc, rank) => acc + Math.floor(Math.sqrt(time / rank)), 0);
		return possibleCars >= cars;
	}
}

test('repairCars', () => {
	expect(repairCars([4, 2, 3, 1], 10)).toBe(16);
	expect(repairCars([5, 1, 8], 6)).toBe(16);
});
