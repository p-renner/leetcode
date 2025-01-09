import { TreeNode, treeFromArr } from './utils/treenode';

function dfs(root: TreeNode | null, level: number, arr: number[][]): void {
	if (!root) {
		return;
	}

	if (!arr[level]) {
		arr[level] = [];
	}

	arr[level].push(root.val);

	dfs(root.left, level + 1, arr);
	dfs(root.right, level + 1, arr);
}

function minimumOperations(root: TreeNode | null): number {
	const array: number[][] = [];

	dfs(root, 0, array);

	function sortSteps(values: number[]): number {
		const sorted = [...values].sort((a, b) => a - b);
		let count = 0;

		for (let i = 0; i < values.length; i++) {
			if (sorted[i] == values[i]) {
				continue;
			}

			const index = values.indexOf(sorted[i]);

			[values[i], values[index]] = [values[index], values[i]];
			count++;
		}

		return count;
	}

	return array.reduce((acc, nums) => acc + sortSteps(nums), 0);
}

test('minimumOperations', () => {
	expect(minimumOperations(treeFromArr([1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10]))).toBe(3);
	expect(minimumOperations(treeFromArr([1, 3, 2, 7, 6, 5, 4]))).toBe(3);
	expect(minimumOperations(treeFromArr([1, 2, 3, 4, 5, 6]))).toBe(0);
});
