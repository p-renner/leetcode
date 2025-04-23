function numRabbits(answers: number[]): number {
	const map = new Map<number, number>();

	for (const num of answers) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	let res = 0;

	for (const [key, val] of map.entries()) {
		res += Math.ceil(val / (key + 1)) * (key + 1);
	}

	return res;
}

test('numRabbits', () => {
	expect(numRabbits([1, 1, 2])).toBe(5);
	expect(numRabbits([10, 10, 10])).toBe(11);
});
