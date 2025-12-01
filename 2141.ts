function maxRunTime(n: number, batteries: number[]): number {
	function canRun(target: number) {
		const sum = batteries.reduce((acc, battery) => acc + Math.min(battery, target), 0);
		const targetSum = target * n;

		return sum >= targetSum;
	}

	let left = 1;
	let right = Math.floor(batteries.reduce((acc, battery) => acc + battery, 0) / n) + 1;

	while (left < right) {
		const middle = Math.floor((left + right) / 2);

		if (canRun(middle)) {
			left = middle + 1;
		} else {
			right = middle;
		}
	}

	return left - 1;
}

describe('maxRunTime', () => {
	test('case 1', () => {
		expect(maxRunTime(2, [3, 3, 3])).toBe(4);
	});

	test('case 2', () => {
		expect(maxRunTime(2, [1, 1, 1, 1])).toBe(2);
	});

	test('case 3', () => {
		expect(maxRunTime(2, [19, 1])).toBe(1);
	});

	test('case 4', () => {
		expect(maxRunTime(3, [10, 10, 3, 5])).toBe(8);
	});
});
