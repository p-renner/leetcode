function decimalRepresentation(n: number): number[] {
	let digits = n.toString().split('');
	const res: number[] = [];

	for (let i = 0; i < digits.length; i++) {
		res.push(Number.parseInt(digits[i] + '0'.repeat(digits.length - i)));
	}

	return res;
}
