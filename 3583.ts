function specialTriplets(nums: number[]): number {
	const coming = new Map<number, number>();
	const seen = new Map<number, number>();

	for (const num of nums) {
		coming.set(num, (coming.get(num) || 0) + 1);
	}

	let res = 0;

	for (const num of nums) {
		coming.set(num, coming.get(num) - 1);
		const doubled = num * 2;

		if (!coming.has(doubled)) {
			seen.set(num, (seen.get(num) || 0) + 1);
			continue;
		}

		if (seen.has(doubled) && coming.has(doubled) && coming.get(doubled) > 0) {
			res = (res + seen.get(doubled) * coming.get(doubled)) % 1000000007;
		}

		seen.set(num, (seen.get(num) || 0) + 1);
	}

	return res;
}

describe('specialTriplets', () => {
	test('case 1', () => {
		expect(specialTriplets([6, 3, 6])).toBe(1);
	});

	test('case 2', () => {
		expect(specialTriplets([0, 1, 0, 0])).toBe(1);
	});

	test('case 3', () => {
		expect(specialTriplets([8, 4, 2, 8, 4])).toBe(2);
	});
});
