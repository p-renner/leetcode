function countSymmetricIntegers(low: number, high: number): number {
	let count = 0;

	for (let i = low; i <= high; i++) {
		const s = i.toString();

		if (s.length % 2 !== 0) {
			continue;
		}

		const first = s.slice(0, s.length / 2);
		const second = s.slice(s.length / 2);

		if (
			first.split('').reduce((acc, curr) => acc + Number.parseInt(curr), 0) ===
			second.split('').reduce((acc, curr) => acc + Number.parseInt(curr), 0)
		) {
			count++;
		}
	}

	return count;
}

test('countSymmetricIntegers', () => {
	expect(countSymmetricIntegers(1, 100)).toBe(9);
});
