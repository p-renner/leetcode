function prefixesDivBy5(nums: number[]): boolean[] {
	const res: boolean[] = [];
	let curr = 0;

	for (let i = 0; i < nums.length; i++) {
		curr = ((curr << 1) | nums[i]) % 5;
		res[i] = curr === 0;
	}

	return res;
}

test('prefixesDivBy5', () => {
	expect(prefixesDivBy5([0, 1, 1])).toStrictEqual([true, false, false]);
	expect(prefixesDivBy5([1, 1, 1])).toStrictEqual([false, false, false]);
	expect(
		prefixesDivBy5([
			1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0,
			0, 0, 1,
		]),
	).toStrictEqual([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		true,
		false,
		false,
		true,
		true,
		true,
		true,
		false,
	]);
});
