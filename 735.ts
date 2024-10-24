function asteroidCollision(asteroids: number[]): number[] {
	const stack: number[] = [];

	for (const asteroid of asteroids) {
		if (asteroid > 0) {
			stack.push(asteroid);
			continue;
		}

		let last = stack[stack.length - 1];
		if (!last || last < 0) {
			stack.push(asteroid);
		}

		while (last && last > 0) {
			const collision = asteroid + last;

			if (collision > 0) {
				last = null;
				continue;
			} else if (collision == 0) {
				stack.pop();
				last = null;
				continue;
			}

			stack.pop();
			last = stack[stack.length - 1];

			if (!last || last < 0) {
				stack.push(asteroid);
			}
		}
	}

	return stack;
}

test('asteroidCollision', () => {
	expect(asteroidCollision([5, 10, -5])).toStrictEqual([5, 10]);
	expect(asteroidCollision([8, -8])).toStrictEqual([]);
	expect(asteroidCollision([10, 2, -5])).toStrictEqual([10]);
	expect(asteroidCollision([-2, -1, 1, 2])).toStrictEqual([-2, -1, 1, 2]);
	expect(asteroidCollision([-2, -2, 1, -2])).toStrictEqual([-2, -2, -2]);
});
