function maxKDivisibleComponents(n: number, edges: number[][], values: number[], k: number): number {
	const connections = new Map<number, number[]>();

	for (const [a, b] of edges) {
		if (!connections.has(a)) {
			connections.set(a, []);
		}

		if (!connections.has(b)) {
			connections.set(b, [a]);
		}

		connections.get(a).push(b);
		connections.get(b).push(a);
	}

	let res = 0;

	function traverse(curr: number, parent: number): number {
		let sum = values[curr];

		if (connections.has(curr)) {
			sum += connections
				.get(curr)
				.filter((c) => c != parent)
				.map((c) => traverse(c, curr))
				.reduce((acc, c) => acc + c, 0);
		}

		if (sum % k == 0) {
			res++;
			return 0;
		}

		return sum;
	}

	traverse(0, -1);
	return res;
}

describe('maxKDivisibleComponents', () => {
	test('case 1', () => {
		expect(
			maxKDivisibleComponents(
				5,
				[
					[0, 2],
					[1, 2],
					[1, 3],
					[2, 4],
				],
				[1, 8, 1, 4, 4],
				6,
			),
		).toBe(2);
	});

	test('case 2', () => {
		expect(
			maxKDivisibleComponents(
				7,
				[
					[0, 1],
					[0, 2],
					[1, 3],
					[1, 4],
					[2, 5],
					[2, 6],
				],
				[3, 0, 6, 1, 5, 2, 1],
				3,
			),
		).toBe(3);
	});

	test('edgecase empty edges', () => {
		expect(maxKDivisibleComponents(1, [], [0], 1)).toBe(1);
	});
});
