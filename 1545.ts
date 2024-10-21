function findKthBit(n: number, k: number): string {
	function construct(n: number): string {
		if (n === 1) {
			return '0';
		}

		const prev = construct(n - 1);
		return (
			prev +
			'1' +
			prev
				.split('')
				.map((c) => (c === '0' ? '1' : '0'))
				.reverse()
				.join('')
		);
	}

	const s = construct(n);
	return s[k - 1];
}

test('findKthBit', () => {
	expect(findKthBit(3, 1)).toBe('0');
	expect(findKthBit(4, 11)).toBe('1');
});
