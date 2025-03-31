function putMarbles(weights: number[], k: number): number {
	const n = weights.length;
	const pairWeights = weights.map((_, i) => weights[i] + weights[i + 1]);

	pairWeights.sort((a, b) => a - b);

	let ans = 0;
	for (let i = 0; i < k - 1; i++) {
		ans += pairWeights[n - 2 - i] - pairWeights[i];
	}

	return ans;
}

test('putMarbles', () => {
	expect(putMarbles([1, 3, 5, 1], 2)).toBe(4);
	expect(putMarbles([1, 3], 2)).toBe(0);
});
