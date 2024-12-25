import { TreeNode, treeFromArr } from './utils/treenode';

function largestValues(root: TreeNode | null): number[] {
	if (root === null) {
		return [];
	}

	const stack: TreeNode[] = [root, null];
	const res: number[] = [];
	let max = -Infinity;

	while (stack.length > 0) {
		const curr = stack.shift();

		if (curr === null) {
			res.push(max);
			max = -Infinity;
			stack.push(null);

			if (stack[0] === null) {
				break;
			}

			continue;
		}

		max = Math.max(max, curr.val);

		if (curr.left !== null) {
			stack.push(curr.left);
		}

		if (curr.right !== null) {
			stack.push(curr.right);
		}
	}

	return res;
}

test('largestValue', () => {
	expect(largestValues(treeFromArr([1, 3, 2, 5, 3, null, 9]))).toStrictEqual([1, 3, 9]);
	expect(largestValues(treeFromArr([1, 2, 3]))).toStrictEqual([1, 3]);
});
