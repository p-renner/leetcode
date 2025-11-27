import { TreeNode, treeFromArr } from './utils/treenode';

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
	function dfs(root: TreeNode | null) {
		if (!root) {
			return null;
		}

		const next: TreeNode[] = [];
		let stack: TreeNode[] = [];
		root.val = 0;

		if (root.left) {
			root.left.val = 0;
			stack.push(root.left);
		}

		if (root.right) {
			root.right.val = 0;
			stack.push(root.right);
		}

		while (stack.length > 0) {
			const sum = stack.reduce((prev, acc) => prev + (acc.left?.val || 0) + (acc.right?.val || 0), 0);

			for (let i = 0; i < stack.length; i++) {
				const curr = stack[i];
				const currSum = (curr.left?.val || 0) + (curr.right?.val || 0);

				if (curr.left !== null) {
					curr.left.val = sum - currSum;
					next.push(curr.left);
				}

				if (curr.right !== null) {
					curr.right.val = sum - currSum;
					next.push(curr.right);
				}
			}

			stack = [...next];
			next.length = 0;
		}

		return root;
	}

	dfs(root);
	return root;
}

describe('replaceValueInTree', () => {
	test('case 1', () => {
		expect(replaceValueInTree(treeFromArr([5, 4, 9, 1, 10, null, 7]))).toEqual(
			treeFromArr([0, 0, 0, 7, 7, null, 11]),
		);
	});

	test('case 2', () => {
		expect(replaceValueInTree(treeFromArr([3, 1, 2]))).toEqual(treeFromArr([0, 0, 0]));
	});
});
