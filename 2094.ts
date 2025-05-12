function findEvenNumbers(digits: number[]): number[] {
	const res: number[] = [];
	const map = new Map<number, number>();

	for (const digit of digits) {
		map.set(digit, (map.get(digit) || 0) + 1);
	}

	for (let i = 100; i < 1000; i += 2) {
		let digit = i;
		let check = new Map<number, number>();

		while (digit >= 1) {
			let dig = digit % 10;
			check.set(dig, (check.get(dig) || 0) + 1);
			digit = Math.floor(digit / 10);
		}

		let isGood = true;

		for (const [key, value] of check.entries()) {
			if (value > (map.get(key) || 0)) {
				isGood = false;
				break;
			}
		}

		if (!isGood) {
			continue;
		}

		res.push(i);
	}

	return res;
}

test('findEvenNumbers', () => {
	expect(findEvenNumbers([2, 1, 3, 0])).toStrictEqual([102, 120, 130, 132, 210, 230, 302, 310, 312, 320]);
});
