function largestIsland(grid: number[][]): number {
	const dirs = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	const size = new Array(grid.length * grid[0].length).fill(0);
	const representative = new Array(grid.length * grid[0].length).fill(-1);

	function union(c1: number, c2: number) {
		const [p1, p2] = [find(c1), find(c2)];

		if (p1 == p2) {
			return;
		}

		representative[p2] = p1;
		size[p1] += size[p2];
		size[p2] = 0;
	}

	function find(c: number) {
		if (c != representative[c]) {
			representative[c] = find(representative[c]);
		}

		return representative[c];
	}

	function makeIndex(x: number, y: number): number {
		return x * grid.length + y;
	}

	for (let x = 0; x < grid.length; x++) {
		for (let y = 0; y < grid[0].length; y++) {
			if (grid[x][y] == 0) {
				continue;
			}

			const index = makeIndex(x, y);
			representative[index] = index;
		}
	}

	for (let x = 0; x < grid.length; x++) {
		for (let y = 0; y < grid[0].length; y++) {
			if (grid[x][y] == 0) {
				continue;
			}

			const index = makeIndex(x, y);
			size[find(index)]++;

			for (const dir of dirs) {
				const dx = x + dir[0];
				const dy = y + dir[1];

				if (dx >= 0 && dx < grid.length && dy >= 0 && dy < grid[0].length && grid[dx][dy] != 0) {
					union(index, makeIndex(dx, dy));
				}
			}
		}
	}

	if (representative.find((val) => val == -1) == undefined) {
		return grid.length * grid[0].length;
	}

	let res = Math.max(...size) + 1;

	for (let x = 0; x < grid.length; x++) {
		for (let y = 0; y < grid[0].length; y++) {
			if (grid[x][y] == 1) {
				continue;
			}

			const seen = new Set();
			const sizes = [];

			for (const dir of dirs) {
				const dx = x + dir[0];
				const dy = y + dir[1];

				if (dx >= 0 && dx < grid.length && dy >= 0 && dy < grid[0].length && grid[dx][dy] != 0) {
					const rep = find(makeIndex(dx, dy));
					if (seen.has(rep)) {
						continue;
					}
					seen.add(rep);
					sizes.push(size[rep]);
				}
			}

			if (sizes.length <= 1) {
				continue;
			}

			res = Math.max(
				sizes.reduce((acc, curr) => acc + curr, 1),
				res,
			);
		}
	}

	return res;
}

test('largestIsland', () => {
	//expect(
	//	largestIsland([
	//		[1, 0],
	//		[0, 1],
	//	]),
	//).toBe(3);
	//expect(
	//	largestIsland([
	//		[1, 1],
	//		[1, 0],
	//	]),
	//).toBe(4);
	//expect(
	//	largestIsland([
	//		[1, 1],
	//		[1, 1],
	//	]),
	//).toBe(4);
	//expect(
	//	largestIsland([
	//		[1, 0, 1],
	//		[0, 0, 0],
	//		[0, 1, 1],
	//	]),
	//).toBe(4);
	//expect(
	//	largestIsland([
	//		[0, 0, 0, 0, 0, 0, 0],
	//		[0, 1, 1, 1, 1, 0, 0],
	//		[0, 1, 0, 0, 1, 0, 0],
	//		[1, 0, 1, 0, 1, 0, 0],
	//		[0, 1, 0, 0, 1, 0, 0],
	//		[0, 1, 0, 0, 1, 0, 0],
	//		[0, 1, 1, 1, 1, 0, 0],
	//	]),
	//).toBe(18);
	expect(
		largestIsland([
			[0, 1, 0, 0, 1, 0, 0, 0],
			[1, 1, 0, 1, 0, 1, 1, 0],
			[1, 1, 1, 0, 0, 1, 1, 1],
			[1, 0, 0, 1, 1, 0, 1, 0],
			[0, 0, 1, 1, 1, 1, 0, 1],
			[0, 0, 1, 1, 1, 0, 1, 0],
			[0, 0, 1, 0, 1, 0, 0, 0],
			[0, 0, 0, 1, 1, 1, 1, 0],
		]),
	).toBe(24);
});
