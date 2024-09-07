import { ListNode, listFromArr } from './utils/listnode';
import { TreeNode, treeFromArr } from './utils/treenode';

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
	if (!root) {
		return false;
	}

	return recurse(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);
}

function recurse(head: ListNode | null, root: TreeNode | null): boolean {
	if (!head) {
		return true;
	}

	if (!root) {
		return false;
	}

	if (head.val == root.val) {
		return recurse(head.next, root.left) || recurse(head.next, root.right);
	}

	return false;
}

test('isSubPath', () => {
	expect(
		isSubPath(
			listFromArr([4, 2, 8]),
			treeFromArr([1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3]),
		),
	).toBe(true);
	expect(
		isSubPath(
			listFromArr([1, 4, 2, 6]),
			treeFromArr([1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3]),
		),
	).toBe(true);
	expect(
		isSubPath(
			listFromArr([1, 4, 2, 6, 8]),
			treeFromArr([1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3]),
		),
	).toBe(false);
});
