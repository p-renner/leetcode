function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
	let satisfied = 0;
	let curr = 0;
	let max = 0;

	for (let i = 0; i < customers.length; i++) {
		if (customers[i - minutes] && grumpy[i - minutes] == 1) {
			curr -= customers[i - minutes];
		}

		if (grumpy[i] == 0) {
			satisfied += customers[i];
			continue;
		}

		curr += customers[i];
		max = Math.max(max, curr);
	}

	return satisfied + max;
}

test('maxSatisfied', () => {
	expect(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)).toStrictEqual(16);
	expect(maxSatisfied([1], [0], 1)).toStrictEqual(1);
});
