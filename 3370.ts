function smallestNumber(n: number): number {
	let it = 1;

	while (it <= n) {
		it = (it << 1) + 1;
	}

	return it;
}
