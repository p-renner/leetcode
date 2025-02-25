function numOfSubarrays(arr: number[]): number {
	const mod = 1e9 + 7;
	let odd = 0;
	let sum = 0;

	for (let num of arr) {
		sum += num;

		if (sum % 2 === 1) {
			odd++;
		}
	}

	return (odd * (arr.length - odd + 1)) % mod;
}

test('numOfSubarrays', () => {
	expect(numOfSubarrays([1, 3, 5])).toEqual(4);
	expect(numOfSubarrays([2, 4, 6])).toEqual(0);
	expect(numOfSubarrays([1, 2, 3, 4, 5, 6, 7])).toEqual(16);
});
