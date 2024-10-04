function dividePlayers(skill: number[]): number {
	const sorted = skill.sort((a, b) => a - b);

	let sum = 0;
	let [a, b] = [0, sorted.length - 1];
	const even = sorted[a] + sorted[b];

	while (b > a) {
		if (skill[a] + skill[b] != even) {
			return -1;
		}

		sum += skill[a] * skill[b];
		a++;
		b--;
	}

	return sum;
}

test('dividePlayers', () => {
	expect(dividePlayers([3, 2, 5, 1, 3, 4])).toBe(22);
	expect(dividePlayers([3, 4])).toBe(12);
	expect(dividePlayers([1, 1, 2, 3])).toBe(-1);
});
