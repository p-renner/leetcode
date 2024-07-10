function minOperations(logs: string[]): number {
	return logs.reduce((prev, log) => {
		if (log == './') {
			return prev;
		}

		if (log == '../') {
			return Math.max(prev - 1, 0);
		}

		return ++prev;
	}, 0);
}

test('minOperations', () => {
	expect(minOperations(['d1/', 'd2/', '../', 'd21/', './'])).toBe(2);
	expect(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/'])).toBe(3);
	expect(minOperations(['d1/', '../', '../', '../'])).toBe(0);
});
