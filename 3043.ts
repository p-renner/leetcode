function longestCommonPrefix(arr1: number[], arr2: number[]): number {
	let max = 0;
	const set = new Set();

	for (let num of new Set(arr1)) {
		while (num > 0) {
			set.add(num);
			num = Math.floor(num / 10);
		}
	}

	for (let num of new Set(arr2)) {
		while (num > 0) {
			if (set.has(num)) {
				max = Math.max(max, num.toString().length);
			}

			num = Math.floor(num / 10);
		}
	}

	return max;
}

test('longestCommonPrefix', () => {
	expect(longestCommonPrefix([1, 10, 100], [1000])).toBe(3);
	expect(longestCommonPrefix([1, 2, 3], [4])).toBe(0);
});
