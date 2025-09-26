function sumZero(n: number): number[] {
	let res: number[] = [];

	if (n % 2 == 1) {
		res.push(0);
	}

	for (let i = 1; i <= Math.floor(n / 2); i++) {
		res.push(i, -i);
	}

	return res;
}
