import { TreeNode, treeFromArr } from './utils/treenode';

function goodNodes(root: TreeNode | null): number {
	let count = 0;

	function dfs(root: TreeNode | null, max: number) {
		if (!root) {
			return 0;
		}

		if (root.val >= max) {
			count++;
		}

		dfs(root.left, Math.max(root.val, max));
		dfs(root.right, Math.max(root.val, max));
	}

	dfs(root, -Infinity);
	return count;
}

test('leafSimilar', () => {
	expect(goodNodes(treeFromArr([3, 3, null, 4, 2]))).toBe(3);
	expect(goodNodes(treeFromArr([1]))).toBe(1);
});
