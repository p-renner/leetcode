function kthDistinct(arr: string[], k: number): string {
	return arr.filter((s, _, arr) => arr.lastIndexOf(s) === arr.indexOf(s))[k - 1] ?? '';
}

test('kthDistinct', () => {
	expect(kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2)).toBe('a');
	expect(kthDistinct(['aaa', 'aa', 'a'], 1)).toBe('aaa');
	expect(kthDistinct(['a', 'b', 'a'], 3)).toBe('');
});
