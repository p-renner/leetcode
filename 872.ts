import { TreeNode, treeFromArr } from './utils/treenode';

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
	function dfs(root: TreeNode | null): number[] {
		if (!root) {
			return [];
		}

		if (root.left == null && root.right == null) {
			return [root.val];
		}

		return dfs(root.left).concat(dfs(root.right));
	}

	return dfs(root1).join(',') === dfs(root2).join(',');
}

test('leafSimilar', () => {
	expect(
		leafSimilar(
			treeFromArr([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]),
			treeFromArr([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]),
		),
	).toBe(true);
	expect(leafSimilar(treeFromArr([1, 2, 3]), treeFromArr([1, 3, 2]))).toBe(false);
	expect(
		leafSimilar(
			treeFromArr([3, 5, 1, 6, 2, 9, 8, null, null, 7, 14]),
			treeFromArr([3, 5, 1, 6, 71, 4, 2, null, null, null, null, null, null, 9, 8]),
		),
	).toBe(false);
});
