function maxArea(height: number[]): number {
	let max: number = 0;
	let left: number = 0;
	let right: number = height.length - 1;

	while (left < right) {
		const container: number = Math.min(height[left], height[right]) * (right - left);
		max = Math.max(max, container);

		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}

	return max;
}

test('maxArea', () => {
	expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
	expect(maxArea([1, 1])).toBe(1);
});
