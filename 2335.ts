function fillCups(amount: number[]): number {
	let count = 0;

	while (true) {
		amount.sort((a, b) => b - a);

		if (amount[1] == 0) {
			break;
		}

		amount[0]--;
		amount[1]--;
		count++;
	}

	return count + amount[0];
}

test('fillCups', () => {
	expect(fillCups([1, 4, 2])).toBe(4);
	expect(fillCups([5, 4, 4])).toBe(7);
	expect(fillCups([5, 0, 0])).toBe(5);
});
