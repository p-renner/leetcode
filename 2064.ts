function minimizedMaximum(n: number, quantities: number[]): number {
	let start = 0;
	let end = Math.max(...quantities);

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		console.log(mid);

		if (canDistribute(mid) && !canDistribute(mid - 1)) {
			return mid;
		}

		if (canDistribute(mid)) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}

	return -1;

	function canDistribute(k: number): boolean {
		return quantities.map((q) => Math.ceil(q / k)).reduce((acc, q) => acc + q, 0) <= n;
	}
}

test('minimizedMaximum', () => {
	expect(minimizedMaximum(6, [11, 6])).toBe(3);
	expect(minimizedMaximum(7, [15, 10, 10])).toBe(5);
	expect(minimizedMaximum(1, [100000])).toBe(100000);
});
