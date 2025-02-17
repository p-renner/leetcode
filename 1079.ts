function numTilePossibilities(tiles: string): number {
	const map = new Map<string, number>();

	for (const tile of tiles) {
		map.set(tile, (map.get(tile) || 0) + 1);
	}

	function dfs(): number {
		let sum = 0;

		for (const [key, value] of map) {
			if (value === 0) {
				continue;
			}

			map.set(key, value - 1);
			sum += 1 + dfs();
			map.set(key, value);
		}

		return sum;
	}

	return dfs();
}

test('numTilePossibilities', () => {
	expect(numTilePossibilities('AAB')).toBe(8);
	expect(numTilePossibilities('AAABBC')).toBe(188);
	expect(numTilePossibilities('V')).toBe(1);
});
