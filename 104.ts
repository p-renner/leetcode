import { TreeNode, treeFromArr } from './utils/treenode';

function maxDepth(root: TreeNode | null): number {
	if (!root) {
		return 0;
	}

	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

test('maxDepth', () => {
	expect(maxDepth(treeFromArr([3, 9, 20, null, null, 15, 7]))).toBe(3);
	expect(maxDepth(treeFromArr([1, null, 2]))).toBe(2);
});
