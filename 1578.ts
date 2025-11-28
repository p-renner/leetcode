function minCost(colors: string, neededTime: number[]): number {
	let cost = 0;
	let prev = 0;

	for (let i = 1; i < colors.length; i++) {
		if (colors[i] != colors[prev]) {
			prev = i;
			continue;
		}

		if (neededTime[i] < neededTime[prev]) {
			cost += neededTime[i];
			continue;
		}

		cost += neededTime[prev];
		prev = i;
	}

	return cost;
}

describe('minCost', () => {
	test('example 1', () => {
		expect(minCost('abaac', [1, 2, 3, 4, 5])).toBe(3);
	});

	test('example 2', () => {
		expect(minCost('abc', [1, 2, 3])).toBe(0);
	});

	test('example 3', () => {
		expect(minCost('aabaa', [1, 2, 3, 4, 1])).toBe(2);
	});
});
