import { TreeNode } from './utils/treenode';

function bstToGst(root: TreeNode | null): TreeNode | null {
	let sum = 0;
	let current = root;
	const stack: TreeNode[] = [];

	while (current !== null || stack.length > 0) {
		while (current !== null) {
			stack.push(current);
			current = current.right;
		}

		current = stack.pop()!;
		sum += current.val;
		current.val = sum;
		current = current.left;
	}

	return root;
}

console.log(
	bstToGst(
		new TreeNode(
			4,
			new TreeNode(1, new TreeNode(0), new TreeNode(2, null, new TreeNode(3))),
			new TreeNode(6, new TreeNode(5), new TreeNode(7, null, new TreeNode(8))),
		),
	),
);
