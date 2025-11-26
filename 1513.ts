function numSub(s: string): number {
	const MOD = 1000000007;
	let res = 0;
	let count = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] == '1') {
			count++;

			if (i < s.length - 1) {
				continue;
			}
		}

		res = (res + (((count * (count + 1)) / 2) % MOD)) % MOD;
		count = 0;
	}

	return res;
}
