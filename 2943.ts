function maximizeSquareHoleArea(n: number, m: number, hBars: number[], vBars: number[]): number {
	function maxConsecutive(arr: number[]): number {
		if (arr.length == 0) {
			return 0;
		}

		let count = 1,
			max = 1;

		for (let i = 1; i < arr.length; i++) {
			if (arr[i] == arr[i - 1] + 1) {
				count++;
			} else {
				max = Math.max(max, count);
				count = 1;
			}
		}

		return Math.max(max, count);
	}

	const asc = (a: number, b: number) => a - b;
	hBars.sort(asc);
	vBars.sort(asc);

	const maxH = maxConsecutive(hBars);
	const maxV = maxConsecutive(vBars);

	return Math.pow(Math.min(maxH, maxV) + 1, 2);
}
