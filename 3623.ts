function countTrapezoids(points: number[][]): number {
	const counts = new Map<number, number>();

	for (const [_, y] of points) {
		counts.set(y, (counts.get(y) || 0) + 1);
	}

	const MOD = 1000000007n;
	let res = 0n;
	let sum = 0n;

	for (const num of counts.values()) {
		const edge: bigint = (BigInt(num) * BigInt(num - 1)) / 2n;
		res = (res + edge * sum) % MOD;
		sum = (sum + edge) % MOD;
	}

	return Number(res);
}

describe('countTrapezoids', () => {
	test('case 1', () => {
		const points = [
			[1, 0],
			[2, 0],
			[3, 0],
			[2, 2],
			[3, 2],
		];
		expect(countTrapezoids(points)).toBe(3);
	});

	test('case 2', () => {
		const points = [
			[0, 0],
			[1, 0],
			[0, 1],
			[2, 1],
		];
		expect(countTrapezoids(points)).toBe(1);
	});
});
