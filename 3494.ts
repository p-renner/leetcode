function minTime(skill: number[], mana: number[]): number {
	const n = skill.length;
	const earliestFreeTime = new Array(skill.length).fill(0);

	for (const potion of mana) {
		let now = earliestFreeTime[0];

		for (let i = 1; i < n; i++) {
			now = Math.max(now + skill[i - 1] * potion, earliestFreeTime[i]);
		}

		earliestFreeTime[n - 1] = now + skill[n - 1] * potion;

		for (let i = n - 2; i >= 0; i--) {
			earliestFreeTime[i] = earliestFreeTime[i + 1] - skill[i + 1] * potion;
		}
	}

	return earliestFreeTime[n - 1];
}

test('minTime', () => {
	expect(minTime([1, 5, 2, 4], [5, 1, 4, 2])).toBe(110);
	expect(minTime([1, 1, 1], [1, 1, 1])).toBe(5);
	expect(minTime([1, 2, 3, 4], [1, 2])).toBe(21);
});
