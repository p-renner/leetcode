function lexicalOrder(n: number): number[] {
	return Array.from({ length: n }, (_, i) => i + 1).sort((a, b) => (a.toString() > b.toString() ? 1 : -1));
}

test('lexicalOrder', () => {
	expect(lexicalOrder(13)).toStrictEqual([1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(lexicalOrder(2)).toStrictEqual([1, 2]);
});
