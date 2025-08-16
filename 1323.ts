function maximum69Number(num: number): number {
	const arr = num.toString().split('');

	const i = arr.findIndex((n) => n == '6');

	if (i == -1) {
		return num;
	}

	arr[i] = '9';
	return Number(arr.join(''));
}
