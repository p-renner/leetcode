function residuePrefixes(s: string): number {
	const chars = new Set(s[0]);
	let res = 1;

	for (let i = 1; i < s.length; i++) {
		if (!chars.has(s[i])) {
			chars.add(s[i]);
		}

		if (chars.size > 2) {
			break;
		}

		if ((i + 1) % 3 == 0) {
			continue;
		}

		if (chars.size == (i + 1) % 3) {
			res++;
		}
	}

	return res;
}
