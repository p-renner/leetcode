function minimumOperations(nums: number[]): number {
	return nums.reduce((acc, curr) => acc + (curr % 3 == 0 ? 0 : 1), 0);
}
