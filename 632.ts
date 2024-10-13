function smallestRange(nums: number[][]): number[] {
	const sets = nums.map((num) => new Set(num));
	const all = nums
		.flat()
		.filter((num, i, arr) => arr.indexOf(num) === i)
		.sort((a, b) => a - b);

	let [c, d] = [Math.min(...all), Math.max(...all)];

	for (let i = 0; i < all.length; i++) {
		const bools = new Array(sets.length).fill(false);
		const a = all[i];

		for (let j = i; j < all.length; j++) {
			const b = all[j];

			for (let i = 0; i < bools.length; i++) {
				if (bools[i]) {
					continue;
				}

				if (sets[i].has(b)) {
					bools[i] = true;
				}
			}

			if (bools.every((set) => set) && b - a < d - c) {
				[c, d] = [a, b];
				break;
			}
		}
	}

	return [c, d];
}

test('smallestRange', () => {
	expect(
		smallestRange([
			[4, 10, 15, 24, 26],
			[0, 9, 12, 20],
			[5, 18, 22, 30],
		]),
	).toStrictEqual([20, 24]);
	expect(
		smallestRange([
			[1, 2, 3],
			[1, 2, 3],
			[1, 2, 3],
		]),
	).toStrictEqual([1, 1]);
	expect(
		smallestRange([
			[10, 10],
			[11, 11],
		]),
	).toStrictEqual([10, 11]);
});
