function canPlaceFlowers(flowerbed: number[], n: number): boolean {
	if (n == 0) return true;

	if (n > Math.ceil(flowerbed.length / 2)) {
		return false;
	}

	let prev = false;

	for (let i = 0; i < flowerbed.length - 1; i++) {
		const curr = flowerbed[i] == 1;
		if (prev || curr) {
			prev = curr;
			continue;
		}

		const next = flowerbed[i + 1] == 1;

		if (next) {
			continue;
		}

		if (n == 1) {
			return true;
		}

		n--;
		prev = true;
	}

	if (n == 1 && !prev && !(flowerbed[flowerbed.length - 1] == 1)) {
		return true;
	}

	return false;
}

test('canPlaceFlowers', () => {
	expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
	expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
	expect(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)).toBe(false);
	expect(canPlaceFlowers([0], 1)).toBe(true);
});
