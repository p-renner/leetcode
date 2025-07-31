function subarrayBitwiseORs(arr: number[]): number {
	const resSet = new Set<number>();
	let currSet = new Set<number>();

	for (const num of arr) {
		const newSet = new Set<number>([num]);

		for (const prev of currSet) {
			newSet.add(prev | num);
		}

		currSet = newSet;
		for (const value of currSet) {
			resSet.add(value);
		}
	}

	return resSet.size;
}

test('subarrayBitwiseORs', () => {
	expect(subarrayBitwiseORs([0])).toBe(1);
	expect(subarrayBitwiseORs([1, 1, 2])).toBe(3);
	expect(subarrayBitwiseORs([1, 2, 4])).toBe(6);
});
