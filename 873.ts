function lenLongestFibSubseq(arr: number[]): number {
	const set = new Set<number>(arr);
	let maxLen = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			let first = arr[i];
			let second = arr[j];
			let len = 2;

			while (set.has(first + second)) {
				[first, second] = [second, first + second];
				len++;
			}

			maxLen = Math.max(len, maxLen);
		}
	}

	return maxLen > 2 ? maxLen : 0;
}

test('lenLongestFibSubseq', () => {
	expect(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8])).toBe(5);
	expect(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18])).toBe(3);
});
