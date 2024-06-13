function minMovesToSeat(seats: number[], students: number[]): number {
	seats.sort((a, b) => a - b);
	return students.sort((a, b) => a - b).reduce((p, c, i) => (p += Math.abs(seats[i] - c)), 0);
}

test('minMovesToSeat', () => {
	expect(minMovesToSeat([3, 1, 5], [2, 7, 4])).toBe(4);
	expect(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])).toBe(7);
	expect(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])).toBe(4);
});
