function countLargestGroup(n: number): number {
	const map = new Map<number, number>();

	for (let i = 1; i <= n; i++) {
		const sum = i
			.toString()
			.split('')
			.reduce((acc, curr) => Number(curr) + acc, 0);
		map.set(sum, (map.get(sum) || 0) + 1);
	}

	const max = Math.max(...map.values());

	return [...map.values()].filter((i) => i == max).length;
}

test('countLargestGroup', () => {
	expect(countLargestGroup(13)).toBe(4);
});
