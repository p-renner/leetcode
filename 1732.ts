function largestAltitude(gain: number[]): number {
	let altitude = 0;
	let max = 0;

	for (const netGain of gain) {
		altitude += netGain;
		max = Math.max(altitude, max);
	}

	return max;
}

test('largestAltitude', () => {
	expect(largestAltitude([-5, 1, 5, 0, -7])).toBe(1);
	expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toBe(0);
});
