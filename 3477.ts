function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
	const usedBaskets = new Set();
	return fruits.reduce((acc, fruit) => {
		if (
			baskets.find((basket, i) => {
				if (usedBaskets.has(i)) {
					return false;
				}

				if (basket < fruit) {
					return false;
				}

				usedBaskets.add(i);
				return true;
			}) != undefined
		) {
			return acc;
		}

		return acc + 1;
	}, 0);
}

test('numOfUnplacedFruits', () => {
	expect(numOfUnplacedFruits([4, 2, 5], [3, 5, 4])).toBe(1);
	expect(numOfUnplacedFruits([3, 6, 1], [6, 4, 7])).toBe(0);
	expect(numOfUnplacedFruits([3, 3, 3], [4, 2, 2])).toBe(2);
});
