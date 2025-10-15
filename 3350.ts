function maxIncreasingSubarrays(nums: number[]): number {
	let inc = 1;
	let prevInc = 0;
	let res = 1;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			inc++;
		} else {
			res = Math.max(res, Math.floor(inc / 2), Math.min(inc, prevInc));
			prevInc = inc;
			inc = 1;
		}
	}
	res = Math.max(res, Math.floor(inc / 2), Math.min(inc, prevInc));

	return res;
}
