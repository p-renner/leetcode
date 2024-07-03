function moveZeroes(nums: number[]): void {
	let p1 = 0;

	for (let p2 = 0; p2 < nums.length; p2++) {
		const tmp = nums[p2];
		nums[p2] = 0;

		if (tmp != 0) {
			nums[p1] = tmp;
			p1++;
		}
	}
}

test('moveZeroes', () => {
	let arr = [0, 1, 0, 3, 12];
	moveZeroes(arr);
	expect(arr).toStrictEqual([1, 3, 12, 0, 0]);

	arr = [0];
	moveZeroes(arr);
	expect(arr).toStrictEqual([0]);

	arr = [1];
	moveZeroes(arr);
	expect(arr).toStrictEqual([1]);

	arr = [0, 1];
	moveZeroes(arr);
	expect(arr).toStrictEqual([1, 0]);

	arr = [1, 0];
	moveZeroes(arr);
	expect(arr).toStrictEqual([1, 0]);

	arr = [0, 0, 1];
	moveZeroes(arr);
	expect(arr).toStrictEqual([1, 0, 0]);

	arr = [0, 1, 0];
	moveZeroes(arr);
	expect(arr).toStrictEqual([1, 0, 0]);
});
