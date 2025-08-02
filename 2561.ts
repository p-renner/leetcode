function minCost(basket1: number[], basket2: number[]): number {
	const freqMap1 = new Map<number, number>();
	const freqMap2 = new Map<number, number>();

	for (const num of basket1) {
		freqMap1.set(num, (freqMap1.get(num) || 0) + 1);
	}

	for (const num of basket2) {
		freqMap2.set(num, (freqMap2.get(num) || 0) + 1);
	}

	let keys = new Set([...freqMap1.keys(), ...freqMap2.keys()]);
	let min = Math.min(...keys);
	let toSwap1 = new Map<number, number>();
	let toSwap2 = new Map<number, number>();

	for (const key of keys) {
		let occ1 = freqMap1.get(key) || 0;
		let occ2 = freqMap2.get(key) || 0;

		if ((occ1 + occ2) % 2 == 1) {
			return -1;
		}

		if (occ1 == occ2) {
			continue;
		}

		const half = (occ1 + occ2) / 2;

		if (occ1 < occ2) {
			toSwap2.set(key, half - occ1);
		} else {
			toSwap1.set(key, half - occ2);
		}
	}

	const sorted1 = [...toSwap1.entries()].sort(([key1], [key2]) => key1 - key2);
	const sorted2 = [...toSwap2.entries()].sort(([key1], [key2]) => key2 - key1);
	let curr1 = sorted1.shift();
	let curr2 = sorted2.shift();
	const doubleMin = min * 2;

	let cost = 0;
	while (sorted1.length > 0 || (curr1 && curr1[1] != 0)) {
		if (curr1[1] <= 0) {
			curr1 = sorted1.shift();
		}

		if (curr2[1] <= 0) {
			curr2 = sorted2.shift();
		}

		const times = Math.min(curr1[1], curr2[1]);

		cost += Math.min(curr1[0], curr2[0], doubleMin) * times;

		curr1[1] -= times;
		curr2[1] -= times;
	}

	return cost;
}

test('minCost', () => {
	expect(minCost([4, 2, 2, 2], [1, 4, 1, 2])).toBe(1);
	expect(minCost([2, 3, 4, 1], [3, 2, 5, 1])).toBe(-1);
});
