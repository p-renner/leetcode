function maxCount(m: number, n: number, ops: number[][]): number {
	let minM = m;
	let minN = n;

	for (const [m, n] of ops) {
		minM = Math.min(m, minM);
		minN = Math.min(n, minN);
	}

	return minM * minN;
}
