function canArrange(arr: number[], k: number): boolean {
	const freq = new Array(k).fill(0);
	arr.forEach((num) => (freq[((num % k) + k) % k] += 1));

	if (freq[0] % 2 !== 0) {
		return false;
	}

	for (let i = 1; i < k - 1; i++) {
		if (freq[i] !== freq[k - i]) {
			return false;
		}
	}

	return true;
}

test('canArrange', () => {
	expect(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5)).toBe(true);
	expect(canArrange([1, 2, 3, 4, 5, 6], 7)).toBe(true);
	expect(canArrange([1, 2, 3, 4, 5, 6], 10)).toBe(false);
});
