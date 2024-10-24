import { TreeNode, treeFromArr } from './utils/treenode';

function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
	if (root1 === null && root2 === null) {
		return true;
	}

	if (root1 === null || root2 === null || root1.val !== root2.val) {
		return false;
	}

	return (
		(flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
		(flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))
	);
}

test('flipEquiv', () => {
	expect(
		flipEquiv(
			treeFromArr([1, 2, 3, 4, 5, 6, null, null, null, 7, 8]),
			treeFromArr([1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7]),
		),
	).toBe(true);
	expect(flipEquiv(treeFromArr([]), treeFromArr([]))).toBe(true);
	expect(flipEquiv(treeFromArr([]), treeFromArr([1]))).toBe(false);
});
