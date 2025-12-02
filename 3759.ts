function countElements(nums: number[], k: number): number {
	const map = new Map<number, number>();

	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	const sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
	const n = nums.length;
	let res = 0;

	for (const key of sortedKeys) {
		const count = map.get(key)!;

		if (n - res - count < k) {
			break;
		}

		res += count;
	}

	return res;
}

describe('countElements', () => {
	test('case 1', () => {
		expect(countElements([3, 1, 2], 1)).toBe(2);
	});

	test('case 2', () => {
		expect(countElements([5, 5, 5], 2)).toBe(0);
	});
});
