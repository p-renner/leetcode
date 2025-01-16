import { TreeNode, treeFromArr } from './utils/treenode';

function pathSum(root: TreeNode | null, targetSum: number): number {
	let count = 0;

	function dfs(root: TreeNode | null, sums: number[]): void {
		if (!root) {
			return;
		}

		sums.push(0);
		const newSums = sums.map((sum) => {
			const newSum = sum + root.val;
			if (newSum == targetSum) {
				count++;
			}

			return newSum;
		});

		dfs(root.left, [...newSums]);
		dfs(root.right, [...newSums]);
	}

	dfs(root, []);
	return count;
}

test('pathSum', () => {
	expect(pathSum(treeFromArr([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8)).toBe(3);
	expect(pathSum(treeFromArr([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)).toBe(3);
});
