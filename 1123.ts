import { TreeNode, treeFromArr } from './utils/treenode';

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
	return postorderTraversal(root, 0).node;

	function postorderTraversal(node: TreeNode, depth: number): { node: TreeNode; depth: number } {
		if (!node) {
			return { node, depth };
		}

		const left = postorderTraversal(node.left, depth + 1);
		const right = postorderTraversal(node.right, depth + 1);

		if (right.depth > left.depth) {
			return right;
		} else if (left.depth > right.depth) {
			return left;
		} else if (left.depth === right.depth) {
			return { node, depth: left.depth };
		} else {
			return { node, depth };
		}
	}
}

test('lcaDeepestLeaves', () => {
	expect(lcaDeepestLeaves(treeFromArr([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]))).toEqual(treeFromArr([2, 7, 4]));
	expect(lcaDeepestLeaves(treeFromArr([1]))).toEqual(treeFromArr([1]));
	expect(lcaDeepestLeaves(treeFromArr([0, 1, 3, null, 2]))).toEqual(treeFromArr([2]));
});
