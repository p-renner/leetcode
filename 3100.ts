function maxBottlesDrunk(numBottles: number, numExchange: number): number {
	let toDrink = numExchange;

	while (numBottles - toDrink >= 0) {
		numBottles++;
		numExchange++;
		toDrink += numExchange;
	}

	return numBottles;
}

test('maxBottlesDrunk', () => {
	expect(maxBottlesDrunk(13, 6)).toBe(15);
	expect(maxBottlesDrunk(10, 3)).toBe(13);
});
