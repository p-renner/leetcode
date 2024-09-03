function getLucky(s: string, k: number): number {
	let num = s
		.split('')
		.map((char) => (char.charCodeAt(0) - 96).toString().split(''))
		.flat()
		.reduce((prev, curr) => prev + Number(curr), 0);

	for (let i = 0; i < k - 1; i++) {
		num = transform(num);
	}

	function transform(num: number): number {
		return num
			.toString()
			.split('')
			.reduce((prev, curr) => prev + Number.parseInt(curr), 0);
	}

	return num;
}

test('getLucky', () => {
	expect(getLucky('iiii', 1)).toBe(36);
	expect(getLucky('leetcode', 2)).toBe(6);
	expect(getLucky('zbax', 3)).toBe(8);
	expect(getLucky('dbvmfhnttvr', 5)).toBe(5);
});
