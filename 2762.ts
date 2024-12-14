function continuousSubarrays(nums: number[]): number {
	const map = new Map<number, number>();
	let result = 0;
	let left = 0;
	let right = 0;

	while (right < nums.length) {
		map.set(nums[right], (map.get(nums[right]) || 0) + 1);

		while (Math.max(...map.keys()) - Math.min(...map.keys()) > 2) {
			map.set(nums[left], map.get(nums[left]) - 1);

			if (map.get(nums[left]) === 0) {
				map.delete(nums[left]);
			}

			left++;
		}

		result += right - left + 1;
		right++;
	}

	return result;
}

test('continuousSubarrays', () => {
	expect(continuousSubarrays([5, 4, 2, 4])).toEqual(8);
	expect(continuousSubarrays([1, 2, 3])).toEqual(6);
	expect(continuousSubarrays([2, 4, 5, 2])).toEqual(6);
	expect(continuousSubarrays([65, 66, 67, 66, 66, 65, 64, 65, 65, 64])).toBe(43);
});
