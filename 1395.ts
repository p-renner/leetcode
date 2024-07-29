function numTeams(rating: number[]): number {
	let sum = 0;

	for (let i = 0; i < rating.length; i++) {
		for (let j = i + 1; j < rating.length; j++) {
			if (rating[i] < rating[j]) {
				for (let k = j + 1; k < rating.length; k++) {
					if (rating[j] < rating[k]) {
						sum++;
					}
				}
			} else {
				for (let k = j + 1; k < rating.length; k++) {
					if (rating[j] > rating[k]) {
						sum++;
					}
				}
			}
		}
	}

	return sum;
}

test('numTeams', () => {
	expect(numTeams([2, 5, 3, 4, 1])).toBe(3);
	expect(numTeams([2, 1, 3])).toBe(0);
	expect(numTeams([1, 2, 3, 4])).toBe(4);
});
