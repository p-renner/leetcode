function uniqueOccurrences(arr: number[]): boolean {
	const map = new Map<number, number>();

	for (const val of arr) {
		map.set(val, (map.get(val) ?? 1) + 1);
	}

	const set = new Set<number>();

	for (const val of map.values()) {
		if (set.has(val)) {
			return false;
		}
		set.add(val);
	}

	return true;
}

test('uniqueOccurrences', () => {
	expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBe(true);
	expect(uniqueOccurrences([1, 2])).toBe(false);
	expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBe(true);
});
