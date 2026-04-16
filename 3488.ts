function solveQueries(nums: number[], queries: number[]): number[] {
	const n = nums.length;

	const indices = new Map<number, number[]>();
	const posInList = new Array<number>(n);

	for (let i = 0; i < n; i++) {
		const v = nums[i];
		if (!indices.has(v)) {
			indices.set(v, []);
		}
		const list = indices.get(v)!;
		posInList[i] = list.length;
		list.push(i);
	}

	return queries.map((q) => {
		const idx = indices.get(nums[q])!;
		if (idx.length === 1) {
			return -1;
		}

		const pos = posInList[q];
		const prev = idx[(pos - 1 + idx.length) % idx.length];
		const next = idx[(pos + 1) % idx.length];
		const distPrev = Math.min(Math.abs(q - prev), n - Math.abs(q - prev));
		const distNext = Math.min(Math.abs(q - next), n - Math.abs(q - next));
		return Math.min(distPrev, distNext);
	});
}

describe('solveQueries', () => {
	test('case 1', () => {
		expect(solveQueries([1, 3, 1, 4, 1, 3, 2], [0, 3, 5])).toEqual([2, -1, 3]);
	});
	test('case 2', () => {
		expect(solveQueries([1, 2, 3, 4], [0, 1, 2, 3])).toEqual([-1, -1, -1, -1]);
	});
});
