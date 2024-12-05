function canChange(start: string, target: string): boolean {
	const seen = [];

	for (let i = 0; i < start.length; i++) {
		const charS = start[i];
		const charT = target[i];

		if (charT == 'L') {
			seen.push(charT);
			if (seen[0] == 'R') {
				return false;
			}
		}

		if (charS == 'R') {
			seen.push(charS);
			if (seen[0] == 'L') {
				return false;
			}
		}

		if (charT == 'R') {
			if (seen[0] != 'R') {
				return false;
			}
			seen.shift();
		}

		if (charS == 'L') {
			if (seen[0] != 'L') {
				return false;
			}
			seen.shift();
		}
	}

	return seen.length == 0;
}

test('canChange', () => {
	expect(canChange('_L__R__R_', 'L______RR')).toBe(true);
	expect(canChange('R_L_', '__LR')).toBe(false);
	expect(canChange('_R', 'R_')).toBe(false);
	expect(canChange('R_L', 'L_R')).toBe(false);
	expect(canChange('R__L', '_LR_')).toBe(false);
});
