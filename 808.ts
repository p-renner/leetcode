function soupServings(n: number): number {
	const dp = new Map<string, number>();

	if (n > 5000) {
		return 1;
	}

	return soups(n, n);

	function soups(a: number, b: number): number {
		if (a == 0) {
			return 0.5;
		}

		if (b <= 0) {
			return 0;
		}

		if (dp.has(`${a},${b}`)) {
			return dp.get(`${a},${b}`)!;
		}

		let ans = 0;

		if (a <= 100) {
			ans += 0.25;
		} else {
			ans += 0.25 * soups(a - 100, b);
		}

		if (a <= 75 && b <= 25) {
			ans += 0.125;
		} else if (a <= 75) {
			ans += 0.25;
		} else {
			ans += 0.25 * soups(a - 75, b - 25);
		}

		if (a <= 50 && b <= 50) {
			ans += 0.125;
		} else if (a <= 50) {
			ans += 0.25;
		} else {
			ans += 0.25 * soups(a - 50, b - 50);
		}

		if (a <= 25 && b <= 75) {
			ans += 0.125;
		} else if (a <= 25) {
			ans += 0.25;
		} else {
			ans += 0.25 * soups(a - 25, b - 75);
		}

		dp.set(`${a},${b}`, ans);

		return ans;
	}
}

test('soupServings', () => {
	expect(soupServings(50)).toBe(0.625);
	expect(soupServings(100)).toBe(0.71875);
});
