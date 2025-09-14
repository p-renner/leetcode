function spellchecker(wordlist: string[], queries: string[]): string[] {
	const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
	const queryToWord = new Map<string, string>();
	const set = new Set(wordlist);
	const shortWordlist = [...set];
	const lowerWordlist = shortWordlist.map((word) => word.toLowerCase());
	const devoweledWordlist = lowerWordlist.map(devowel);

	return queries.map((q) => {
		if (queryToWord.has(q)) {
			return queryToWord.get(q);
		}

		if (set.has(q)) {
			queryToWord.set(q, q);
			return q;
		}

		let word = capitalization(q);

		if (word != '') {
			queryToWord.set(q, word);
			return word;
		}

		word = vowelErrors(q);
		queryToWord.set(q, word);
		return word;
	});

	function capitalization(query: string): string {
		const q = query.toLowerCase();

		for (let i = 0; i < shortWordlist.length; i++) {
			if (lowerWordlist[i] == q) {
				return shortWordlist[i];
			}
		}

		return '';
	}

	function vowelErrors(query: string): string {
		const q = devowel(query.toLowerCase());

		for (let i = 0; i < shortWordlist.length; i++) {
			if (devoweledWordlist[i] == q) {
				return shortWordlist[i];
			}
		}

		return '';
	}

	function devowel(word: string): string {
		let res = '';

		for (const c of word) {
			if (vowels.has(c)) {
				res += '*';
				continue;
			}

			res += c;
		}

		return res;
	}
}

test('spellchecker', () => {
	expect(
		spellchecker(
			['KiTe', 'kite', 'hare', 'Hare'],
			['kite', 'Kite', 'KiTe', 'Hare', 'HARE', 'Hear', 'hear', 'keti', 'keet', 'keto'],
		),
	).toStrictEqual(['kite', 'KiTe', 'KiTe', 'Hare', 'hare', '', '', 'KiTe', '', 'KiTe']);
	expect(spellchecker(['yellow'], ['YellOw'])).toStrictEqual(['yellow']);
});
