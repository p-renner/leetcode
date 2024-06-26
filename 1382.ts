import { TreeNode } from './utils/treenode';

function balanceBST(root: TreeNode | null): TreeNode | null {
	return balance(inorderTraversal(root));
}

function balance(tree: number[]): TreeNode | null {
	if (tree.length == 0) {
		return null;
	}

	let middle = Math.floor(tree.length / 2);
	return new TreeNode(tree[middle], balance(tree.slice(0, middle)), balance(tree.slice(middle + 1)));
}

function inorderTraversal(root: TreeNode | null): number[] {
	if (root === null) {
		return [];
	}

	return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
}

test('balanceBST', () => {
	const root = new TreeNode(1);
	root.right = new TreeNode(2);
	root.right.right = new TreeNode(3);
	root.right.right.right = new TreeNode(4);
	expect(balanceBST(root)).toMatchObject({
		val: 3,
		left: { val: 2, left: { val: 1 } },
		right: { val: 4 },
	});
});
