function minOperations(s: string): number {
	function check(first: '1' | '0'): number {
		let res = 0;

		for (let i = 0; i < s.length; i++) {
			if (i % 2 === 0 && s[i] != first) {
				res++;
			}

			if (i % 2 === 1 && s[i] == first) {
				res++;
			}
		}

		return res;
	}

	return Math.min(check('0'), check('1'));
}
