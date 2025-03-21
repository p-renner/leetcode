function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
	const set = new Set<string>(supplies);
	const res: string[] = [];
	let size = -1;

	while (set.size != size) {
		size = set.size;

		for (let i = 0; i < recipes.length; i++) {
			if (set.has(recipes[i])) {
				continue;
			}

			if (ingredients[i].every((ing) => set.has(ing))) {
				set.add(recipes[i]);
				res.push(recipes[i]);
			}
		}
	}

	return res;
}

test('findAllRecipes', () => {
	expect(findAllRecipes(['bread'], [['yeast', 'flour']], ['yeast', 'flour', 'corn'])).toStrictEqual(['bread']);
	expect(
		findAllRecipes(
			['bread', 'sandwich'],
			[
				['yeast', 'flour'],
				['bread', 'meat'],
			],
			['yeast', 'flour', 'meat'],
		),
	).toStrictEqual(['bread', 'sandwich']);
	expect(
		findAllRecipes(
			['bread', 'sandwich', 'burger'],
			[
				['yeast', 'flour'],
				['bread', 'meat'],
				['sandwich', 'meat', 'bread'],
			],
			['yeast', 'flour', 'meat'],
		),
	).toStrictEqual(['bread', 'sandwich', 'burger']);
});
