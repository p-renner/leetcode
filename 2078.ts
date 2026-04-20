function maxDistance(colors: number[]): number {
	let res = 0;
	const n = colors.length - 1;
	const first = colors[0];
	const last = colors[n];

	for (let i = 0; i < colors.length; i++) {
		if (colors[i] === last) {
			continue;
		}

		res = n - i;
		break;
	}

	for (let i = n; i > 0; i--) {
		if (colors[i] === first) {
			continue;
		}

		res = Math.max(res, i);
		break;
	}

	return res;
}

describe('maxDistance', () => {
	test('case 1', () => {
		expect(maxDistance([1, 1, 1, 6, 1, 1, 1])).toBe(3);
	});
	test('case 2', () => {
		expect(maxDistance([1, 8, 3, 8, 3])).toBe(4);
	});
	test('case 3', () => {
		expect(maxDistance([0, 1])).toBe(1);
	});
	test('case 4', () => {
		expect(maxDistance([6, 6, 6, 6, 6, 6, 6, 6, 6, 19, 19, 6, 6])).toBe(10);
	});
});
