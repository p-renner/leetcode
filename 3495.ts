function minOperations(queries: number[][]): number {
	let pows = [1];

	let pow = 1;
	for (let i = 0; i < 15; i++) {
		pow *= 4;
		pows.push(pow);
	}

	let res = 0;

	for (const [l, r] of queries) {
		let iL = 0;
		let iR = 0;

		for (let i = 0; i < pows.length; i++) {
			if (pows[i] > l) {
				iL = i;
				break;
			}
		}

		for (let i = iL; i < pows.length; i++) {
			if (pows[i] > r) {
				iR = i;
				break;
			}
		}

		let total = iL * (Math.min(pows[iL], r + 1) - l);

		for (let i = iL + 1; i <= iR; i++) {
			total += i * (Math.min(pows[i], r + 1) - pows[i - 1]);
		}

		res += Math.ceil(total / 2);
	}

	return res;
}

test('minOperations', () => {
	expect(
		minOperations([
			[1, 2],
			[2, 4],
		]),
	).toBe(3);
	expect(minOperations([[2, 6]])).toBe(4);
});
