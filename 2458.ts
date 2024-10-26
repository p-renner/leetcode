import { TreeNode, treeFromArr } from './utils/treenode';

function treeQueries(root: TreeNode | null, queries: number[]): number[] {
	const levels = new Map<number, number[][]>();
	const valLevel = new Map<number, number>();

	function dfs(root: TreeNode, level = 0): number {
		if (!root) {
			return level - 1;
		}

		const max = Math.max(dfs(root.left, level + 1), dfs(root.right, level + 1));

		if (!levels.has(level)) {
			levels.set(level, []);
		}

		const curr = levels.get(level);

		if (curr.length == 0) {
			curr[0] = [root.val, max];
		} else if (curr[0][1] < max) {
			curr[1] = curr[0];
			curr[0] = [root.val, max];
		} else if (curr.length == 1 || curr[1][1] < max) {
			curr[1] = [root.val, max];
		}
		levels.set(level, curr);

		valLevel.set(root.val, level);
		return max;
	}

	dfs(root);

	const ans = queries.map((q) => {
		const level = valLevel.get(q);
		const maxes = levels.get(level);

		if (maxes.length == 1) {
			return level - 1;
		}

		const [val, max, max1] = [maxes[0][0], maxes[0][1], maxes[1][1]];
		return val === q ? max1 : max;
	});

	return ans;
}

test('treeQueries', () => {
	expect(treeQueries(treeFromArr([1, 3, 4, 2, null, 6, 5, null, null, null, null, null, 7]), [4])).toStrictEqual([2]);
	expect(treeQueries(treeFromArr([5, 8, 9, 2, 1, 3, 7, 4, 6]), [3, 2, 4, 8])).toStrictEqual([3, 2, 3, 2]);
});
