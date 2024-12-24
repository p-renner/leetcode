import { TreeNode, treeFromArr } from './utils/treenode';

function dfs(root: TreeNode | null, level: number, arr: TreeNode[][]): void {
	if (!root) {
		return;
	}

	if (!arr[level]) {
		arr[level] = [];
	}

	arr[level].push(root);

	dfs(root.left, level + 1, arr);
	dfs(root.right, level + 1, arr);
}

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
	const array = [];

	dfs(root, 0, array);

	for (let i = 0; i < array.length; ++i) {
		if (i % 2 == 1 && array[i]) {
			const len = array[i].length;

			for (let j = 0; j < len / 2; j++) {
				let first = array[i][j];
				let last = array[i][len - j - 1];
				[first.val, last.val] = [last.val, first.val];
			}
		}
	}
	return root;
}

test('reverseOddLevels', () => {
	expect(reverseOddLevels(treeFromArr([2, 3, 5, 8, 13, 21, 34]))).toStrictEqual(
		treeFromArr([2, 5, 3, 8, 13, 21, 34]),
	);
});
