function sortPeople(names: string[], heights: number[]): string[] {
	return names
		.map((name, index) => ({ name, height: heights[index] }))
		.sort((a, b) => b.height - a.height)
		.map(({ name }) => name);
}

test('sortPeople', () => {
	expect(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170])).toEqual(['Mary', 'Emma', 'John']);
	expect(sortPeople(['Alice', 'Bob', 'Bob'], [155, 185, 150])).toEqual(['Bob', 'Alice', 'Bob']);
});
