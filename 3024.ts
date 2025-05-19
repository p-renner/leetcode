function triangleType(nums: number[]): string {
	nums.sort((a, b) => a - b);

	if (nums[0] + nums[1] <= nums[2]) {
		return 'none';
	}

	const unique = new Set(nums).size;

	if (unique == 1) {
		return 'equilateral';
	}
	if (unique == 2) {
		return 'isosceles';
	}

	return 'scalene';
}
