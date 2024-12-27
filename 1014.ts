function maxScoreSightseeingPair(values: number[]): number {
	return values.reduce(
		(prev, curr, i) => [Math.max(prev[0], prev[1] + curr - i), Math.max(prev[1], curr + i)],
		[0, 0],
	)[0];
}

//function maxScoreSightseeingPair(values: number[]): number {
//	let res = 0;
//	let i = 0;
//
//	for (let j = 1; j < values.length; j++) {
//		res = Math.max(values[i] + values[j] + i - j, res);
//
//		if (values[i] + i - j <= values[j]) {
//			i = j;
//		}
//	}
//
//	return res;
//}

test('maxScoreSightseeingPair', () => {
	expect(maxScoreSightseeingPair([8, 1, 5, 2, 6])).toBe(11);
	expect(maxScoreSightseeingPair([1, 2])).toBe(2);
});
