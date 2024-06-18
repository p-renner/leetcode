// There is prob a better way to do this. But it works :)
function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
	let maxProfit = 0;
	let prev = 0;

	let jobs = difficulty
		.map((diff, i) => {
			return { difficulty: diff, profit: profit[i] };
		})
		.sort((a, b) => a.difficulty - b.difficulty)
		.filter((job) => {
			if (job.profit > prev) {
				prev = job.profit;
				return true;
			}
			return false;
		})
		.reverse();

	for (const w of worker) {
		const potJobs = jobs.find((job) => job.difficulty <= w);
		if (!potJobs) continue;

		maxProfit += potJobs.profit;
	}

	return maxProfit;
}

test('maxProfitAssignment', () => {
	expect(maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])).toBe(100);
	expect(maxProfitAssignment([85, 47, 57], [24, 66, 99], [40, 25, 25])).toBe(0);
	expect(maxProfitAssignment([68, 35, 52, 47, 86], [67, 17, 1, 81, 3], [92, 10, 85, 84, 82])).toBe(324);
});
