function minimumBoxes(apple: number[], capacity: number[]): number {
	capacity.sort((a, b) => b - a);

	let amount = apple.reduce((acc, curr) => acc + curr, 0);
	let i = 0;

	while (amount > 0) {
		amount -= capacity[i];
		i++;
	}

	return i;
}
