function findRelativeRanks(score: number[]): string[] {
	const sorted = [...score].sort((a, b) => b - a);
	const map = new Map<number, string>();
	const place = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];

	for (let i = 0; i < score.length; i++) {
		if (i < 3) {
			map.set(sorted[i], place[i]);
			continue;
		}

		map.set(sorted[i], (i + 1).toString());
	}

	return score.map((s) => map.get(s));
}

test('findRelativeRanks', () => {
	expect(findRelativeRanks([5, 4, 3, 2, 1])).toStrictEqual(['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5']);
	expect(findRelativeRanks([10, 3, 8, 9, 4])).toStrictEqual(['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4']);
});
