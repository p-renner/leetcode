function combinationSum2(candidates: number[], target: number): number[][] {
	const answer: number[][] = [];
	candidates.sort((a, b) => a - b);

	backtrack(0, target, []);

	function backtrack(j: number, target: number, path: number[]) {
		if (target < 0) {
			return;
		}

		if (target == 0) {
			answer.push(path);
			return;
		}

		for (let i = j; i < candidates.length; i++) {
			if (i > j && candidates[i] == candidates[i - 1]) {
				continue;
			}

			backtrack(i + 1, target - candidates[i], [...path, candidates[i]]);
		}
	}

	return answer;
}

test('combinationSum2', () => {
	expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toStrictEqual([
		[1, 1, 6],
		[1, 2, 5],
		[1, 7],
		[2, 6],
	]);
	expect(combinationSum2([2, 5, 2, 1, 2], 5)).toStrictEqual([[1, 2, 2], [5]]);
});
