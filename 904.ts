function totalFruit(fruits: number[]): number {
	let res = 0;
	let left = 0;
	let current = new Map<number, number>();

	for (let right = 0; right < fruits.length; right++) {
		let fruit = fruits[right];
		current.set(fruit, right);

		if (current.size > 2) {
			let min = [...current.entries()].sort((a, b) => a[1] - b[1])[0];
			current.delete(min[0]);

			res = Math.max(right - left, res);
			left = min[1] + 1;
		}
	}
	res = Math.max(fruits.length - left, res);

	return res;
}

test('totalFruit', () => {
	expect(totalFruit([1, 2, 1])).toBe(3);
	expect(totalFruit([0, 1, 2, 2])).toBe(3);
	expect(totalFruit([1, 2, 3, 2, 2])).toBe(4);
});
