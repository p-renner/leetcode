import { TreeNode, treeFromArr } from './utils/treenode';

class FindElements {
	private values: Set<number> = new Set();

	constructor(root: TreeNode | null) {
		if (root === null) {
			return;
		}

		this.values.add(0);
		root.val = 0;
		this.fill(root);
	}

	find(target: number): boolean {
		return this.values.has(target);
	}

	private fill(root: TreeNode | null): void {
		if (root === null) {
			return;
		}

		if (root.left) {
			root.left.val = root.val * 2 + 1;
			this.values.add(root.left.val);
			this.fill(root.left);
		}

		if (root.right) {
			root.right.val = root.val * 2 + 2;
			this.values.add(root.right.val);
			this.fill(root.right);
		}
	}
}

test('FindElements', () => {
	const findElements = new FindElements(treeFromArr([-1, null, -1]));
	expect(findElements.find(1)).toBe(false);
	expect(findElements.find(2)).toBe(true);

	const findElements2 = new FindElements(treeFromArr([-1, -1, -1, -1, -1]));
	expect(findElements2.find(1)).toBe(true);
	expect(findElements2.find(3)).toBe(true);
	expect(findElements2.find(5)).toBe(false);
});
