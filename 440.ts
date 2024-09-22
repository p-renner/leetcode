function findKthNumber(n: number, k: number): number {
	let curr = 1;
	k -= 1;

	while (k > 0) {
		let steps = calcSteps(curr, curr + 1);
		if (steps <= k) {
			curr += 1;
			k -= steps;
		} else {
			curr *= 10;
			k -= 1;
		}
	}

	return curr;

	function calcSteps(n1: number, n2: number): number {
		let steps = 0;
		while (n1 <= n) {
			steps += Math.min(n + 1, n2) - n1;
			n1 *= 10;
			n2 *= 10;
		}
		return steps;
	}
}

test('findKthNumber', () => {
	expect(findKthNumber(13, 2)).toBe(10);
	expect(findKthNumber(2, 2)).toBe(2);
});
