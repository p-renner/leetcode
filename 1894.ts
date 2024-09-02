function chalkReplacer(chalk: number[], k: number): number {
	const sum = chalk.reduce((a, b) => a + b);
	let rest = k % sum;

	for (let i = 0; i < chalk.length; i++) {
		if (rest < chalk[i]) {
			return i;
		}

		rest -= chalk[i];
	}

	return 0;
}

test('chalkReplacer', () => {
	expect(chalkReplacer([5, 1, 5], 22)).toBe(0);
	expect(chalkReplacer([3, 4, 1, 2], 25)).toBe(1);
});
