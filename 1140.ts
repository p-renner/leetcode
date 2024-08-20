function stoneGameII(piles: number[]): number {
	const suffixSum = [];
	const memo = Array.from({ length: piles.length }, () => []);

	let sum = 0;
	for (let i = piles.length - 1; i >= 0; i--) {
		sum += piles[i];
		suffixSum.unshift(sum);
	}

	function maxStones(m: number, i: number): number {
		if (i + 2 * m >= piles.length) {
			return suffixSum[i];
		}

		if (memo[i] && memo[i][m]) {
			return memo[i][m];
		}

		let res = Infinity;

		for (let j = 1; j < 2 * m + 1; j++) {
			res = Math.min(res, maxStones(Math.max(j, m), i + j));
		}

		memo[i][m] = suffixSum[i] - res;
		return memo[i][m];
	}

	const res = maxStones(1, 0);
	return res;
}

test('stoneGameII', () => {
	expect(stoneGameII([2, 7, 9, 4, 4])).toBe(10);
	expect(stoneGameII([1, 2, 3, 4, 5, 100])).toBe(104);
});
