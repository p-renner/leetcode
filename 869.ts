function reorderedPowerOf2(n: number): boolean {
	const pows = new Set([
		'1',
		'2',
		'4',
		'8',
		'16',
		'23',
		'46',
		'128',
		'256',
		'125',
		'0124',
		'0248',
		'0469',
		'1289',
		'13468',
		'23678',
		'35566',
		'011237',
		'122446',
		'224588',
		'0145678',
		'0122579',
		'0134449',
		'0368888',
		'11266777',
		'23334455',
		'01466788',
		'112234778',
		'234455668',
		'012356789',
		'0112344778',
	]);

	return pows.has(n.toString().split('').sort().join(''));
}

test('reorderedPowerOf2', () => {
	expect(reorderedPowerOf2(1)).toBe(true);
	expect(reorderedPowerOf2(10)).toBe(false);
	expect(reorderedPowerOf2(46)).toBe(true);
});
