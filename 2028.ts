function missingRolls(rolls: number[], mean: number, n: number): number[] {
	const sum = mean * (rolls.length + n);
	let sumRolls = rolls.reduce((acc, curr) => acc + curr, 0);

	if (sumRolls + n > sum || sumRolls + 6 * n < sum) {
		return [];
	}

	const addRolls: number[] = [];
	for (let i = 0; i < n; i++) {
		const roll = Math.ceil((sum - sumRolls) / (n - i));
		addRolls.push(roll);
		sumRolls += roll;
	}

	return addRolls;
}

test('missingRolls', () => {
	expect(missingRolls([3, 2, 4, 3], 4, 2)).toStrictEqual([6, 6]);
	expect(missingRolls([1, 5, 6], 3, 4)).toStrictEqual([3, 2, 2, 2]);
	expect(missingRolls([1, 2, 3, 4], 6, 4)).toStrictEqual([]);
});
