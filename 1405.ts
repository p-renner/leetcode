function longestDiverseString(a: number, b: number, c: number): string {
	const nums = [a, b, c];
	const last = { i: 0, count: 0 };
	let res = '';

	while (nums[0] > 0 || nums[1] > 0 || nums[2] > 0) {
		let max = nums[0] >= nums[1] && nums[0] >= nums[2] ? 0 : nums[1] >= nums[2] ? 1 : 2;

		if (last.i == max && last.count >= 2) {
			if (nums.filter((num) => num > 0).length == 1) {
				break;
			}

			const tmp = [...nums];
			tmp[max] = -1;
			max = tmp[0] >= tmp[1] && tmp[0] >= tmp[2] ? 0 : tmp[1] >= tmp[2] ? 1 : 2;
		}

		if (last.i == max) {
			last.count++;
		} else {
			last.i = max;
			last.count = 1;
		}

		nums[max]--;
		res += max == 0 ? 'a' : max == 1 ? 'b' : 'c';
	}

	return res;
}

test('longestDiverseString', () => {
	expect(longestDiverseString(1, 1, 7)).toBe('ccaccbcc');
	expect(longestDiverseString(7, 1, 0)).toBe('aabaa');
});
