function nthUglyNumber(n: number): number {
	let prime = [
		[-1, 1, 2],
		[-1, 1, 3],
		[-1, 1, 5],
	];

	const nums = new Array(n);

	for (let i = 0; i < n; i++) {
		const min = Math.min(...prime.map((p) => p[1]));
		nums[i] = min;

		for (let j = 0; j < prime.length; j++) {
			if (min === prime[j][1]) {
				prime[j][0]++;
				prime[j][1] = nums[prime[j][0]] * prime[j][2];
			}
		}
	}

	return nums[n - 1];
}

test('nthUglyNumber', () => {
	expect(nthUglyNumber(10)).toBe(12);
	expect(nthUglyNumber(1)).toBe(1);
	expect(nthUglyNumber(1407)).toBe(536870912);
});
