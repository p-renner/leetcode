import { TreeNode, treeFromArr } from './utils/treenode';

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
	let [pathS, pathT] = [pathString(root, startValue), pathString(root, destValue)];
	let i = 0;

	while (i < pathS.length && i < pathT.length && pathS[i] == pathT[i]) {
		i++;
	}

	pathS = pathS.slice(i).replace(/[LR]/g, 'U');
	pathT = pathT.slice(i);

	return pathS + pathT;
}

function pathString(root: TreeNode | null, target: number): string | null {
	if (!root) {
		return null;
	}

	if (root.val == target) {
		return '';
	}

	const left = pathString(root.left, target);
	if (left != null) {
		return 'L' + left;
	}

	const right = pathString(root.right, target);
	if (right != null) {
		return 'R' + right;
	}

	return null;
}

test('getDirections', () => {
	expect(getDirections(treeFromArr([7, 8, 9, 10, 5, 1, 2, 3, null, 6, 4]), 3, 6)).toBe('UURL');
	expect(getDirections(treeFromArr([2, 1]), 2, 1)).toBe('L');
});
