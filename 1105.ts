function minHeightShelves(books: number[][], shelfWidth: number): number {
	const dp = new Array(books.length + 1);
	dp[0] = 0;

	books.forEach((book, i) => {
		let [width, height] = book;
		dp[i + 1] = dp[i] + height;

		let curr = i;
		while (curr > 0 && width + books[curr - 1][0] <= shelfWidth) {
			width += books[curr - 1][0];
			height = Math.max(height, books[curr - 1][1]);
			dp[i + 1] = Math.min(dp[i + 1], dp[curr - 1] + height);
			curr--;
		}
	});

	return dp[books.length];
}

test('minHeightShelves', () => {
	expect(
		minHeightShelves(
			[
				[1, 1],
				[2, 3],
				[2, 3],
				[1, 1],
				[1, 1],
				[1, 1],
				[1, 2],
			],
			4,
		),
	).toBe(6);
	expect(
		minHeightShelves(
			[
				[1, 3],
				[2, 4],
				[3, 2],
			],
			6,
		),
	).toBe(4);
});
