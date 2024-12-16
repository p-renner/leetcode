import { treeFromArr, TreeNode } from './utils/treenode';

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
	if (root == null) {
		return [];
	}

	const paths: number[][] = [];

	function inorderTraversal(root: TreeNode, path: number[]) {
		if (root.left === null && root.right == null) {
			paths.push([...path, root.val]);
			return;
		}

		if (root.left !== null) {
			inorderTraversal(root.left, [...path, root.val]);
		}

		if (root.right !== null) {
			inorderTraversal(root.right, [...path, root.val]);
		}
	}

	inorderTraversal(root, []);

	return paths.filter((path) => path.reduce((acc, curr) => acc + curr, 0) == targetSum);
}

test('pathSum', () => {
	expect(pathSum(treeFromArr([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)).toStrictEqual([
		[5, 4, 11, 2],
		[5, 8, 4, 5],
	]);
});
