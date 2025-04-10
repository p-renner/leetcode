function numberOfPowerfulInt(start: number, finish: number, limit: number, s: string): number {
	const sNum = Number.parseInt(s);
	if (sNum > finish) {
		return 0;
	} else if (sNum == finish) {
		return 1;
	}

	let startPart = start.toString().slice(0, start.toString.length - s.length - 1);

	let aString = '';
	let bigger = false;

	for (const c of startPart) {
		if (bigger) {
			aString += limit;
			continue;
		}

		if (Number.parseInt(c) > limit) {
			aString += limit;
			bigger = true;
		} else {
			aString += c;
		}
	}
	let a = (Number.parseInt(aString, limit + 1) || 0) + (Number.parseInt(aString + s) < start ? 1 : 0);

	const finishPart = finish.toString().slice(0, finish.toString.length - s.length - 1);
	let bString = '';
	bigger = false;

	for (const c of finishPart) {
		if (bigger) {
			bString += limit;
			continue;
		}

		if (Number.parseInt(c) > limit) {
			bString += limit;
			bigger = true;
		} else {
			bString += c;
		}
	}

	const b = Number.parseInt(bString, limit + 1) - (Number.parseInt(bString + s) > finish ? 1 : 0);

	return b - a + 1;
}

test('numberOfPowerfulInt', () => {
	expect(numberOfPowerfulInt(1, 6000, 4, '124')).toBe(5);
	expect(numberOfPowerfulInt(1, 60000, 4, '124')).toBe(25);
	expect(numberOfPowerfulInt(15, 215, 6, '10')).toBe(2);
	expect(numberOfPowerfulInt(1000, 2000, 4, '3000')).toBe(0);
	expect(numberOfPowerfulInt(141, 148, 9, '9')).toBe(0);
	expect(numberOfPowerfulInt(697662853, 11109609599885, 6, '5')).toBe(16135677999);
	expect(numberOfPowerfulInt(3200377228, 36442626250702, 9, '59544')).toBe(364394258);
	expect(numberOfPowerfulInt(1, 1000000000000000, 5, '1000000000000000')).toBe(1);
});
