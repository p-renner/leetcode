import { TreeNode, treeFromArr } from './utils/treenode';

function postorderTraversal(root: TreeNode | null): number[] {
	const res: number[] = [];
	const queue: TreeNode[] = [root];

	if (!root) {
		return res;
	}

	while (queue.length > 0) {
		const curr = queue.pop();
		console.log(curr);

		res.unshift(curr.val);

		if (curr.left) {
			queue.push(curr.left);
		}

		if (curr.right) {
			queue.push(curr.right);
		}
	}

	return res;
}

test('postorderTraversal', () => {
	expect(postorderTraversal(treeFromArr([1, null, 2, 3]))).toStrictEqual([3, 2, 1]);
	expect(postorderTraversal(treeFromArr([]))).toStrictEqual([]);
	expect(postorderTraversal(treeFromArr([1]))).toStrictEqual([1]);
});
