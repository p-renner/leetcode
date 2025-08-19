function getKth(lo: number, hi: number, k: number): number {
	let numToPow = new Map<number, number>();
	numToPow.set(1, 0);

	for (let i = lo; i <= hi; i++) {
		if (numToPow.has(i)) {
			continue;
		}

		let curr = i;
		let queue = [curr];

		while (!numToPow.has(curr)) {
			if (curr % 2 == 0) {
				curr /= 2;
			} else {
				curr = curr * 3 + 1;
			}

			queue.unshift(curr);
		}

		const add = numToPow.get(curr);
		queue.forEach((num, pow) => numToPow.set(num, pow + add));
	}

	const num = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i).sort((a: number, b: number) => {
		const powA = numToPow.get(a);
		const powB = numToPow.get(b);

		if (powA == powB) {
			return a - b;
		}

		return powA - powB;
	});

	return num[k - 1];
}

test('getKth', () => {
	expect(getKth(12, 15, 2)).toBe(13);
	expect(getKth(7, 11, 4)).toBe(7);
	expect(getKth(1, 1000, 777)).toBe(570);
});
