function numWaterBottles(numBottles: number, numExchange: number): number {
	let res = numBottles;
	while (numBottles >= numExchange) {
		const curr = Math.floor(numBottles / numExchange);
		numBottles = curr + (numBottles % numExchange);
		res += curr;
	}

	return res;
}

test('numWaterBottles', () => {
	expect(numWaterBottles(9, 3)).toBe(13);
	expect(numWaterBottles(15, 4)).toBe(19);
});
