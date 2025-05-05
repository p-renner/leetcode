function minDominoRotations(tops: number[], bottoms: number[]): number {
	function rotations(target: number): number {
		let top = 0;
		let bottom = 0;

		for (let i = 0; i < tops.length; i++) {
			if (tops[i] !== target && bottoms[i] !== target) {
				return Infinity;
			}

			if (tops[i] !== target) {
				top++;
			}

			if (bottoms[i] !== target) {
				bottom++;
			}
		}

		return Math.min(top, bottom);
	}

	const result = Math.min(rotations(tops[0]), rotations(bottoms[0]));
	return result === Infinity ? -1 : result;
}

test('minDominoRotations', () => {
	expect(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2])).toBe(2);
});
