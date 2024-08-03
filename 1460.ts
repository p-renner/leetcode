// Runtime: O(n)
function canBeEqual(target: number[], arr: number[]): boolean {
	if (target.length !== arr.length) {
		return false;
	}

	const targetMap = new Map<number, number>();
	const arrMap = new Map<number, number>();

	target.forEach((e) => targetMap.set(e, (targetMap.get(e) || 0) + 1));
	arr.forEach((e) => arrMap.set(e, (arrMap.get(e) || 0) + 1));

	for (const [key, val] of targetMap) {
		if (arrMap.get(key) !== val) return false;
	}

	return true;
}

// Runtime: O(nlogn)
function canBeEqual2(target: number[], arr: number[]): boolean {
	return JSON.stringify(target.sort()) == JSON.stringify(arr.sort());
}

test('canBeEqual', () => {
	expect(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])).toBe(true);
	expect(canBeEqual([7], [7])).toBe(true);
	expect(canBeEqual([3, 7, 9], [3, 7, 11])).toStrictEqual(false);
});
