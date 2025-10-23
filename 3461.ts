function hasSameDigits(s: string): boolean {
	let nums = s.split('').map((c) => Number.parseInt(c));

	while (nums.length > 2) {
		let tmp: number[] = [];
		let prev = nums[0];

		for (let i = 1; i < nums.length; i++) {
			const curr = nums[i];
			tmp.push((prev + curr) % 10);
			prev = curr;
		}

		nums = tmp;
	}

	return nums[0] == nums[1];
}
