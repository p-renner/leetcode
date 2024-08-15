function lemonadeChange(bills: number[]): boolean {
	let five = 0;
	let ten = 0;

	for (const bill of bills) {
		if (bill == 5) {
			five++;
			continue;
		}

		if (five == 0) {
			return false;
		}

		if (bill == 10) {
			five--;
			ten++;
		}

		if (ten == 0 && five < 3) {
			return false;
		}

		if (ten == 0) {
			five -= 3;
			continue;
		}

		ten -= 1;
		five -= 1;
	}

	return true;
}
