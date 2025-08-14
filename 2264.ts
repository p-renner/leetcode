function largestGoodInteger(num: string): string {
	for (let i = 9; i >= 0; i--) {
		const curr = i.toString().repeat(3);
		if (num.includes(curr)) {
			return curr;
		}
	}

	return '';
}
