function minCapability(nums: number[], k: number): number {
	let min = Math.min(...nums);
	let max = Math.max(...nums);

	while (min < max) {
		let mid = Math.floor((min + max) / 2);

		if (checkCapability(mid)) {
			max = mid;
		} else {
			min = mid + 1;
		}
	}

	return min;

	function checkCapability(c: number) {
		let [a, b] = [0, 0];

		for (const num of nums) {
			[a, b] = [b, a];

			if (num > c) {
				a = Math.max(a, b);
				continue;
			}

			a = Math.max(b, a + 1);

			if (a == k) {
				return true;
			}
		}

		return false;
	}
}

test('minCapability', () => {
	//expect(minCapability([2, 3, 5, 9], 2)).toBe(5);
	//expect(minCapability([2, 7, 9, 3, 1], 2)).toBe(2);
	expect(minCapability([24, 1, 55, 46, 4, 61, 21, 52], 3)).toBe(21);
});
