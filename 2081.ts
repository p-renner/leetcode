function kMirror(k: number, n: number): number {
	let left = 1;
	let count = 0;
	let res = 0;

	while (count < n) {
		const right = left * 10;

		for (let parity = 0; parity < 2; parity++) {
			for (let i = left; i < right; i++) {
				let next = i;
				let x = parity === 0 ? Math.floor(i / 10) : i;

				if (x != 0) {
					let str = x.toString();
					next = Number(i.toString() + str.split('').reverse().join(''));
				}

				const nextStr = next.toString(k);
				if (nextStr == nextStr.split('').reverse().join('')) {
					count++;
					res += next;

					if (count == n) {
						return Number(res);
					}
				}
			}
		}

		left = right;
	}

	return Number(res);
}

test('kMirror', () => {
	expect(kMirror(2, 5)).toBe(25);
	expect(kMirror(3, 7)).toBe(499);
	expect(kMirror(7, 17)).toBe(20379000);
});
