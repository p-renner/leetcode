function numberToWords(num: number): string {
	if (num == 0) {
		return 'Zero';
	}

	let res = '';
	const mult = ['', ' Thousand ', ' Million ', ' Billion '];

	let i = 0;
	while (num > 0) {
		if (num % 1000 == 0) {
			num = Math.floor(num / 1000);
			i++;
			continue;
		}

		res = threeDigitsToWords(num % 1000) + mult[i++] + res;
		num = Math.floor(num / 1000);
	}

	return res.trim();
}

function threeDigitsToWords(num: number): string {
	if (num == 0) {
		return '';
	}

	const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
	const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
	const teens = [
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'Ten',
		'Eleven',
		'Twelve',
		'Thirteen',
		'Fourteen',
		'Fifteen',
		'Sixteen',
		'Seventeen',
		'Eighteen',
		'Nineteen',
	];

	const teen = Math.floor(num % 100);
	const hundred = Math.floor(num / 100) % 10;

	if (teen < 20 && teen > 9) {
		if (hundred > 0) {
			return ones[hundred] + ' Hundred ' + teens[teen];
		}
		return teens[teen];
	}

	const one = num % 10;
	const ten = Math.floor(num / 10) % 10;

	if (hundred == 0) {
		if (ten == 0) {
			return ones[one];
		}

		if (one == 0) {
			return tens[ten];
		}

		return tens[ten] + ' ' + ones[one];
	}

	if (ten == 0 && one == 0) {
		return ones[hundred] + ' Hundred';
	}

	if (ten == 0) {
		return ones[hundred] + ' Hundred ' + ones[one];
	}

	if (one == 0) {
		return ones[hundred] + ' Hundred ' + tens[ten];
	}

	return ones[hundred] + ' Hundred ' + tens[ten] + ' ' + ones[one];
}

test('numberToWords', () => {
	expect(numberToWords(123)).toBe('One Hundred Twenty Three');
	expect(numberToWords(12345)).toBe('Twelve Thousand Three Hundred Forty Five');
	expect(numberToWords(1234567)).toBe('One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven');
	expect(numberToWords(1234567891)).toBe(
		'One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One',
	);
	expect(numberToWords(0)).toBe('Zero');
	expect(numberToWords(1000234)).toBe('One Million Two Hundred Thirty Four');
	expect(numberToWords(20)).toBe('Twenty');
	expect(numberToWords(100)).toBe('One Hundred');
	expect(numberToWords(110)).toBe('One Hundred Ten');
	expect(numberToWords(120)).toBe('One Hundred Twenty');
});
