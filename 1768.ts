function mergeAlternately(word1: string, word2: string): string {
	let sub = '';
	if (word1.length > word2.length) {
		sub = word1.substring(word2.length);
	} else if (word2.length > word1.length) {
		sub = word2.substring(word1.length);
	}

	let word = '';
	for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
		word += word1[i] + word2[i];
	}

	return word + sub;
}

function mergeAlternately2(word1: string, word2: string): string {
	const word1Arr = word1.split('');
	const word2Arr = word2.split('');

	const word: string[] = [];
	while (word1Arr.length > 0 && word2Arr.length > 0) {
		word.push(word1Arr.shift()!);
		word.push(word2Arr.shift()!);
	}
	return word.concat(word1Arr, word2Arr).join('');
}

test('mergeAlternately', () => {
	expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr');
	expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');
	expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd');
});

test('mergeAlternately2', () => {
	expect(mergeAlternately2('abc', 'pqr')).toBe('apbqcr');
	expect(mergeAlternately2('ab', 'pqrs')).toBe('apbqrs');
	expect(mergeAlternately2('abcd', 'pq')).toBe('apbqcd');
});
