function minNumberOfSeconds(mountainHeight: number, workerTimes: number[]): number {
	const maxWorkerTimes = Math.max(...workerTimes);
	let min = 1;
	let max = (maxWorkerTimes * mountainHeight * (mountainHeight + 1)) / 2;
	let res = 0;

	while (min <= max) {
		const mid: number = Math.floor((min + max) / 2);
		let count = 0;

		for (const t of workerTimes) {
			const work = Math.floor(mid / t);
			const k = Math.floor((-1.0 + Math.sqrt(1 + work * 8)) / 2 + 1e-7);
			count += k;
		}

		if (count >= mountainHeight) {
			res = mid;
			max = mid - 1;
		} else {
			min = mid + 1;
		}
	}

	return res;
}

describe('minNumberOfSeconds', () => {
	test('case 1', () => {
		expect(minNumberOfSeconds(4, [2, 1, 1])).toBe(3);
	});
	test('case 2', () => {
		expect(minNumberOfSeconds(10, [3, 2, 2, 4])).toBe(12);
	});
	test('case 3', () => {
		expect(minNumberOfSeconds(5, [1])).toBe(15);
	});
});
