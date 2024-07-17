import { TreeNode, treeFromArr } from './utils/treenode';

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
	const toDelete = new Set(to_delete);
	const queue: TreeNode[] = [root];
	const res: TreeNode[] = [root];

	if (!root) {
		return [];
	}

	if (toDelete.has(root.val)) {
		return [...delNodes(root.left, Array.from(toDelete)), ...delNodes(root.right, Array.from(toDelete))];
	}

	while (queue.length > 0) {
		const curr = queue.shift();

		if (!curr) {
			continue;
		}

		if (toDelete.has(curr.left?.val)) {
			res.push(
				...delNodes(curr.left.left, Array.from(toDelete)),
				...delNodes(curr.left.right, Array.from(toDelete)),
			);
			curr.left = null;
		} else {
			queue.push(curr.left);
		}

		if (toDelete.has(curr.right?.val)) {
			res.push(
				...delNodes(curr.right.left, Array.from(toDelete)),
				...delNodes(curr.right.right, Array.from(toDelete)),
			);
			curr.right = null;
		} else {
			queue.push(curr.right);
		}
	}

	return res.filter((r) => !!r);
}

test('delNodes', () => {
	//expect(delNodes(treeFromArr([1, 2, 3, 4, 5, 6, 7]), [3, 5])).toStrictEqual([
	//	treeFromArr([1, 2, null, 4]),
	//	treeFromArr([6]),
	//	treeFromArr([7]),
	//]);
	//expect(delNodes(treeFromArr([1, 2, 4, null, 3]), [3])).toStrictEqual([treeFromArr([1, 2, 4])]);
	expect(delNodes(treeFromArr([1, 2, 3, null, null, null, 4]), [2, 1])).toStrictEqual([treeFromArr([3, null, 4])]);
});
