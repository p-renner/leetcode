function maxDistance(position: number[], m: number): number {
	position.sort((a, b) => a - b);
	let left = 0;
	let right = position[position.length - 1] - position[0];
	let result = 0;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (check(position, mid, m)) {
			result = mid;
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return result;
}

function check(position: number[], mid: number, m: number): boolean {
	let count = 1;
	let last = position[0];
	for (let i = 1; i < position.length; i++) {
		if (position[i] - last >= mid) {
			count++;
			last = position[i];
		}
	}
	return count >= m;
}

test('maxDistance', () => {
	expect(maxDistance([1, 2, 3, 4, 7], 3)).toBe(3);
	expect(maxDistance([5, 4, 3, 2, 1, 1000000000], 2)).toBe(999999999);
	expect(maxDistance([79, 74, 57, 22], 4)).toBe(5);
});
