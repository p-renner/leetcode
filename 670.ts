function maximumSwap(num: number): number {
	const numArr = num.toString().split('').map(parseFloat);
	const maxNum = [...numArr].sort((a, b) => b - a);
	let maxI = -1;
	let max = -1;

	for (let i = 0; i < numArr.length; i++) {
		if (numArr[i] != maxNum[i] && numArr[i] >= max) {
			max = numArr[i];
			maxI = i;
		}
	}

	if (maxI == -1) {
		return num;
	}

	const minI = numArr.findIndex((num) => num < numArr[maxI]);

	if (minI == -1) {
		return num;
	}

	[numArr[maxI], numArr[minI]] = [numArr[minI], numArr[maxI]];

	return numArr.reduce((acc, curr) => acc * 10 + curr, 0);
}

test('maximumSwap', () => {
	expect(maximumSwap(2736)).toBe(7236);
	expect(maximumSwap(9973)).toBe(9973);
	expect(maximumSwap(1324)).toBe(4321);
	expect(maximumSwap(10909091)).toBe(90909011);
});
