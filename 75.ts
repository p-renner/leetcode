function sortColors(nums: number[]): void {
	const freqMap = new Map<number, number>();
	for (const color of nums) {
		freqMap.set(color, (freqMap.get(color) || 0) + 1);
	}

	let i = 0;

	for (let color = 0; color <= 2; color++) {
		if (!freqMap.has(color)) {
			continue;
		}

		for (let j = 0; j < freqMap.get(color)!; j++) {
			nums[i] = color;
			i++;
		}
	}
}

test('sortColors', () => {
	const nums = [1, 2, 0, 1, 2, 0, 0, 0, 2];
	sortColors(nums);
	expect(nums).toEqual([0, 0, 0, 0, 1, 1, 2, 2, 2]);
});
