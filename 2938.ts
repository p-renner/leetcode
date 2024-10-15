function minimumSteps(s: string): number {
	let min = 0;
	let step = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] == '1') {
			min += step;
			continue;
		}

		step++;
	}

	return min;
}

test('minimumSteps', () => {
	expect(minimumSteps('101')).toBe(1);
	expect(minimumSteps('100')).toBe(2);
	expect(minimumSteps('0111')).toBe(0);
});
