function avoidFlood(rains: number[]): number[] {
	const lastRain = new Map<number, number>();
	const canDry: number[] = [];
	const ans = new Array(rains.length).fill(-1);

	for (let day = 0; day < rains.length; day++) {
		const lake = rains[day];

		if (lake == 0) {
			canDry.push(day);
			ans[day] = 1;
			continue;
		}

		if (lastRain.has(lake)) {
			const last = lastRain.get(lake);
			const index = canDry.findIndex((dry) => dry > last);

			if (index == -1) {
				return [];
			}

			ans[canDry[index]] = lake;
			canDry[index] = -1;
		}

		lastRain.set(lake, day);
	}

	return ans;
}

test('avoidFlood', () => {
	expect(avoidFlood([1, 2, 3, 4])).toStrictEqual([-1, -1, -1, -1]);
	expect(avoidFlood([1, 2, 0, 0, 2, 1])).toStrictEqual([-1, -1, 2, 1, -1, -1]);
	expect(avoidFlood([1, 2, 0, 2, 1])).toStrictEqual([]);
	expect(avoidFlood([0, 1, 1])).toStrictEqual([]);
});
