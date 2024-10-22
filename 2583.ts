import { TreeNode, treeFromArr } from './utils/treenode';

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
	const stack: TreeNode[] = [root, null];
	const sums: number[] = [0];

	if (root === null) {
		return -1;
	}

	while (stack.length > 0) {
		const curr = stack.shift();

		if (curr === null) {
			sums.unshift(0);
			stack.push(null);

			if (stack[0] === null) {
				break;
			}

			continue;
		}

		sums[0] += curr.val;

		if (curr.left !== null) {
			stack.push(curr.left);
		}

		if (curr.right !== null) {
			stack.push(curr.right);
		}
	}

	return sums.sort((a, b) => b - a)[k - 1] || -1;
}

test('kthLargestLevelSum', () => {
	expect(kthLargestLevelSum(treeFromArr([5, 8, 9, 2, 1, 3, 7, 4, 6]), 2)).toBe(13);
	expect(kthLargestLevelSum(treeFromArr([1, 2, null, 3]), 1)).toBe(3);
	expect(kthLargestLevelSum(treeFromArr([5, 8, 9, 2, 1, 3, 7]), 4)).toBe(-1);
});
