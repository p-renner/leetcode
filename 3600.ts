function maxStability(n: number, edges: number[][], k: number): number {
	const canAchieve = (mid: number): boolean => {
		const parent = Array.from({ length: n }, (_, i) => i);
		const rank = new Array(n).fill(0);

		const find = (x: number): number => {
			while (parent[x] !== x) {
				parent[x] = parent[parent[x]];
				x = parent[x];
			}
			return x;
		};

		const union = (x: number, y: number): boolean => {
			const px = find(x), py = find(y);
			if (px === py) return false;
			if (rank[px] < rank[py]) parent[px] = py;
			else if (rank[px] > rank[py]) parent[py] = px;
			else { parent[py] = px; rank[px]++; }
			return true;
		};

		for (const [u, v, s, must] of edges) {
			if (must === 1) {
				if (s < mid) return false;
				if (!union(u, v)) return false;
			}
		}

		for (const [u, v, s, must] of edges) {
			if (must === 0 && s >= mid) union(u, v);
		}

		let upgrades = 0;
		for (const [u, v, s, must] of edges) {
			if (must === 0 && s < mid && s * 2 >= mid) {
				if (union(u, v)) upgrades++;
			}
		}

		if (upgrades > k) return false;

		const root = find(0);
		for (let i = 1; i < n; i++) {
			if (find(i) !== root) return false;
		}

		return true;
	};

	const candidates = new Set<number>([0]);
	for (const [, , s, must] of edges) {
		candidates.add(s);
		if (must === 0) candidates.add(s * 2);
	}
	const sorted = [...candidates].sort((a, b) => a - b);

	if (!canAchieve(0)) return -1;

	let lo = 0, hi = sorted.length - 1, ans = 0;
	while (lo <= hi) {
		const mid = (lo + hi) >> 1;
		if (canAchieve(sorted[mid])) {
			ans = sorted[mid];
			lo = mid + 1;
		} else {
			hi = mid - 1;
		}
	}

	return ans;
}

describe('maxStability', () => {
	test('case 1', () => {
		expect(maxStability(3, [[0,1,2,1],[1,2,3,0]], 1)).toBe(2);
	});
	test('case 2', () => {
		expect(maxStability(3, [[0,1,4,0],[1,2,3,0],[0,2,1,0]], 2)).toBe(6);
	});
	test('case 3', () => {
		expect(maxStability(3, [[0,1,1,1],[1,2,1,1],[2,0,1,1]], 0)).toBe(-1);
	});
});
