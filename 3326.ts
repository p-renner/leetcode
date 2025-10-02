function minOperations(nums: number[]): number {
	let last = nums[nums.length - 1];
	let res = 0;

	for (let i = nums.length - 2; i >= 0; i--) {
		if (nums[i] <= last) {
			last = nums[i];
			continue;
		}

		const smallestPrime = smallestPrimeDivisor(nums[i]);

		if (smallestPrime > last) {
			return -1;
		}

		last = smallestPrime;
		res++;
	}

	return res;
}

function smallestPrimeDivisor(n: number): number {
	if (n <= 1) return -1;
	if (n % 2 === 0) return 2;
	if (n % 3 === 0) return 3;

	for (let i = 5; i * i <= n; i += 6) {
		if (n % i === 0) return i;
		if (n % (i + 2) === 0) return i + 2;
	}

	return n;
}

test('minOperations', () => {
	expect(minOperations([8, 16, 8])).toBe(2);
});
