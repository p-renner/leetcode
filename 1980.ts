function findDifferentBinaryString(nums: string[]): string {
	const set = new Set(nums.map((num) => parseInt(num, 2)));
	const len = nums[0].length;
	const max = 2 ** len;

	for (let i = max - 1; i >= 0; i--) {
		if (set.has(i)) {
			continue;
		}

		return i.toString(2).padStart(len, '0');
	}

	return '';
}
test('findDifferentBinaryString', () => {
	expect(findDifferentBinaryString(['01', '10'])).toBe('11');
	expect(findDifferentBinaryString(['00', '01'])).toBe('11');
	expect(findDifferentBinaryString(['111', '011', '001'])).toBe('110');
	expect(findDifferentBinaryString(['10', '11'])).toBe('01');
});
