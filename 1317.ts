function getNoZeroIntegers(n: number): number[] {
	for (let i = 1; i < n; i++) {
		let a = i;
		let b = n - i;

		if (!a.toString().includes('0') && !b.toString().includes('0')) {
			return [a, b];
		}
	}

	return [];
}
